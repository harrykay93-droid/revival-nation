import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import {
  sendContactAdminNotificationEmail,
  sendContactUserAcknowledgmentEmail,
} from "@/lib/email-service";
import type { ContactPayload, ContactRecord } from "@/lib/event-service";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request payload." }, { status: 400 });
  }

  const { name, email, phone, subject, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, message: "Required fields (name, email, message) are missing." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const supabase = getSupabase();

  // Combine subject & phone into formatted db text if needed for full log transparency
  const extraDetails = [];
  if (subject?.trim()) extraDetails.push(`Subject: ${subject.trim()}`);
  if (phone?.trim()) extraDetails.push(`Phone: ${phone.trim()}`);

  const formattedMessage = extraDetails.length > 0
    ? `${extraDetails.join(" | ")}\n\n${message.trim()}`
    : message.trim();

  const record: ContactRecord = {
    id: createId(),
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim(),
    subject: subject?.trim(),
    message: message.trim(),
    created_at: new Date().toISOString(),
    email_sent: false,
    admin_notified: false,
  };

  // 1. Save to Supabase DB if configured
  // Note: email_sent / admin_notified are optional tracking columns added in schema v2.
  // We omit them from the initial INSERT so submissions succeed even on the original schema.
  let savedRecord = record;
  let storedInDb = false;

  if (supabase) {
    const baseInsert: Record<string, unknown> = {
      id: record.id,
      name: record.name,
      email: record.email,
      message: formattedMessage,
      created_at: record.created_at,
    };

    const { data: inserted, error: insertError } = await supabase
      .from("contact_messages")
      .insert(baseInsert)
      .select()
      .single();

    if (insertError) {
      console.error("[contact] Database insert error:", insertError.message);
      // Do NOT abort — we still attempt to send emails so the user's message isn't lost.
    } else if (inserted) {
      storedInDb = true;
      savedRecord = { ...record, ...inserted };
    }
  }

  // 2. Dispatch dual emails: Admin notification & User auto-acknowledgment
  const [adminNotified, userAcknowledged] = await Promise.all([
    sendContactAdminNotificationEmail(record.name, record.email, record.phone, record.subject, record.message),
    sendContactUserAcknowledgmentEmail(record.name, record.email, record.subject, record.message),
  ]);

  // 3. Best-effort status update (silently skipped if schema columns don't exist yet)
  if (supabase && storedInDb) {
    try {
      await supabase
        .from("contact_messages")
        .update({ admin_notified: adminNotified, email_sent: userAcknowledged })
        .eq("id", record.id);
    } catch {
      // Schema v2 columns not yet present — safe to ignore
    }
  }

  const successMessage = userAcknowledged
    ? "Thank you for reaching out! Your message has been received and a confirmation email was sent to your inbox."
    : "Thank you for reaching out! Your message has been recorded and the Revival Nation team will get back to you shortly.";

  return NextResponse.json({
    ok: true,
    stored: storedInDb,
    emailSent: userAcknowledged,
    adminNotified,
    message: successMessage,
    data: {
      ...savedRecord,
      admin_notified: adminNotified,
      email_sent: userAcknowledged,
    },
  });
}
