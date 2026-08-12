import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendRegistrationConfirmationEmail } from "@/lib/email-service";
import type { RegistrationPayload, RegistrationRecord } from "@/lib/event-service";

// ── Supabase (server-side client uses service role key if available, falls back to anon) ──
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
  const emailSent = await sendRegistrationConfirmationEmail(savedRecord.email, savedRecord.fullName, savedRecord.id);

  // ── 4. Update confirmation_sent in Supabase ONLY IF EMAIL DELIVERY CONFIRMED ──
  if (emailSent) {
    const { error: updateError } = await supabase
      .from("registrations")
      .update({ confirmation_sent: true })
      .eq("id", savedRecord.id);

    if (updateError) {
      console.error("[register] Failed to update confirmation_sent in Supabase:", updateError);
    }
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
