import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendRegistrationConfirmationEmail } from "@/lib/email-service";
import type { RegistrationRecord } from "@/lib/event-service";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function POST(request: NextRequest) {
  let body: { registrationId?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request payload." }, { status: 400 });
  }

  const { registrationId, email } = body;

  if (!registrationId?.trim() && !email?.trim()) {
    return NextResponse.json(
      { ok: false, message: "Please provide either a registrationId or email address." },
      { status: 400 }
    );
  }

  const supabase = getSupabase();

  if (!supabase) {
    return NextResponse.json({
      ok: false,
      message: "Database connection is not configured.",
    }, { status: 500 });
  }

  let query = supabase.from("registrations").select("*");

  if (registrationId?.trim()) {
    query = query.eq("id", registrationId.trim());
  } else if (email?.trim()) {
    query = query.eq("email", email.trim().toLowerCase());
  }

  const { data: records, error } = await query.order("created_at", { ascending: false }).limit(1);

  if (error || !records || records.length === 0) {
    return NextResponse.json({
      ok: false,
      message: "No matching registration record was found.",
    }, { status: 444 });
  }

  const record = records[0] as RegistrationRecord;

  const emailSent = await sendRegistrationConfirmationEmail(record.email, record.fullName, record.id);

  if (emailSent) {
    const { error: updateError } = await supabase
      .from("registrations")
      .update({ confirmation_sent: true })
      .eq("id", record.id);

    if (updateError) {
      console.error("[resend-confirmation] Failed to update confirmation_sent status:", updateError);
    }
  }

  return NextResponse.json({
    ok: true,
    emailSent,
    message: emailSent
      ? `Confirmation email successfully resent to ${record.email}.`
      : `Failed to resend confirmation email to ${record.email}. Please verify mail settings.`,
    data: {
      ...record,
      confirmation_sent: emailSent,
    },
  });
}
