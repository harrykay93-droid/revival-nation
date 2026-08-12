import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";
import type { RegistrationPayload, RegistrationRecord } from "@/lib/event-service";

// ── Supabase (server-side client uses service role key if available, falls back to anon) ──
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// ── Send email helper supporting Resend API & Nodemailer Gmail SMTP ──
async function sendConfirmationEmail(toEmail: string, name: string, reference: string): Promise<boolean> {
  const senderEmail = process.env.GMAIL_USER || process.env.EMAIL_FROM || "revivalnation40@gmail.com";
  const htmlContent = buildConfirmationHtml(name, reference);
  const subject = "Thank you for registering — Revival Fire 2026";

  // 1. Try Resend API if RESEND_API_KEY is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Revival Nation <${senderEmail}>`,
          to: [toEmail],
          subject,
          html: htmlContent,
        }),
      });

      if (res.ok) {
        return true;
      }
      const errData = await res.json();
      console.error("[register] Resend API error:", errData);
    } catch (err) {
      console.error("[register] Resend API fetch failed:", err);
    }
  }

  // 2. Try Nodemailer Gmail SMTP if GMAIL_APP_PASSWORD is configured
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // STARTTLS
        auth: { user: senderEmail, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"Revival Nation" <${senderEmail}>`,
        to: toEmail,
        subject,
        html: htmlContent,
      });

      return true;
    } catch (err) {
      console.error("[register] Gmail SMTP failed:", err);
    }
  }

  console.warn("[register] Neither RESEND_API_KEY nor GMAIL_APP_PASSWORD is configured. Email sending skipped.");
  return false;
}

// ── Email HTML ──
function buildConfirmationHtml(name: string, reference: string) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #b45309;">Thank you for registering with Revival Nation</h2>
      <p>Hi ${name},</p>
      <p>Thank you for registering for <strong>Revival Fire 2026</strong>. We are excited to welcome you and pray that this time will be a powerful moment of renewal in your life.</p>
      <p>Your reference number is <strong style="color: #b45309;">${reference}</strong>.</p>
      <p>Please keep this reference handy for check-in at the venue.</p>
      <hr style="border-color: #e5e7eb; margin: 24px 0;" />
      <h3 style="margin-bottom: 0.5rem;">Event Details</h3>
      <p><strong>Date:</strong> Saturday, 15 August 2026</p>
      <p><strong>Time:</strong> 3:00 PM</p>
      <p><strong>Venue:</strong> RCCG Calvary Parish Car Park, Itire, Surulere, Lagos</p>
      <hr style="border-color: #e5e7eb; margin: 24px 0;" />
      <p>If you have any questions, feel free to reply to this email or contact us at <strong>revivalnation40@gmail.com</strong>.</p>
      <p style="margin-top: 1.5rem;">With love,<br />Revival Nation Ministry</p>
    </div>
  `;
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export async function POST(request: NextRequest) {
  let payload: RegistrationPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const supabase = getSupabase();

  // ── 1. Build the record ──
  const record: RegistrationRecord = {
    ...payload,
    id: createId(),
    created_at: new Date().toISOString(),
    checked_in: false,
    confirmation_sent: false,
  };

  // ── 2. Save to Supabase ──
  if (!supabase) {
    // No DB configured — dev/preview mode
    return NextResponse.json({
      ok: true,
      stored: false,
      message: "Supabase is not configured. Registration saved locally for preview.",
      data: record,
    });
  }

  const { data: inserted, error: insertError } = await supabase
    .from("registrations")
    .insert(record)
    .select()
    .single();

  if (insertError) {
    return NextResponse.json(
      { ok: false, stored: false, message: insertError.message, data: record },
      { status: 500 }
    );
  }

  const savedRecord = inserted as RegistrationRecord;

  // ── 3. Send confirmation email ──
  const emailSent = await sendConfirmationEmail(savedRecord.email, savedRecord.fullName, savedRecord.id);

  // ── 4. Update confirmation_sent in Supabase ──
  const { error: updateError } = await supabase
    .from("registrations")
    .update({ confirmation_sent: emailSent })
    .eq("id", savedRecord.id);

  if (updateError) {
    console.error("[register] Failed to update confirmation_sent in Supabase:", updateError);
  }

  return NextResponse.json({
    ok: true,
    stored: true,
    message: emailSent
      ? "Registration saved and confirmation email sent."
      : "Registration saved, but confirmation email could not be sent.",
    data: { ...savedRecord, confirmation_sent: emailSent } as RegistrationRecord,
  });
}
