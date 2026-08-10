import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export type RegistrationPayload = {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  ageRange: string;
  church: string;
  address: string;
  occupation: string;
  source: string;
  prayerRequest: string;
  followUp: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type RegistrationRecord = RegistrationPayload & {
  id: string;
  created_at: string;
  checked_in: boolean;
  confirmation_sent: boolean;
};

export type ContactRecord = ContactPayload & {
  id: string;
  created_at: string;
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buildConfirmationHtml(name: string, reference: string) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="color: #b45309;">Thank you for registering with Revival Nation</h2>
      <p>Hi ${name},</p>
      <p>Thank you for registering for Revival Fire 2026. We are excited to welcome you and pray that this time will be a powerful moment of renewal.</p>
      <p>Your reference number is <strong>${reference}</strong>.</p>
      <p>Please keep this reference handy for check-in at the venue.</p>
      <hr style="border-color: #e5e7eb; margin: 24px 0;" />
      <h3 style="margin-bottom: 0.5rem;">Next Program</h3>
      <p>We are already preparing our next Revival Nation gathering. You will receive another email soon with the date, location, and schedule for the next program.</p>
      <p>If you have any questions, feel free to reply to this message or contact us at <strong>revivalnation40@gmail.com</strong>.</p>
      <p style="margin-top: 1.5rem;">With love,<br />Revival Nation Ministry</p>
    </div>
  `;
}

async function sendConfirmationEmail(recipient: string, name: string, reference: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !resendFrom) {
    return { ok: true, skipped: true };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: [recipient],
      subject: "Thank you for registering — Revival Fire 2026",
      html: buildConfirmationHtml(name, reference),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed: ${response.status}`);
  }

  return { ok: true, skipped: false };
}

export async function saveRegistration(payload: RegistrationPayload) {
  const record: RegistrationRecord = {
    ...payload,
    id: createId(),
    created_at: new Date().toISOString(),
    checked_in: false,
    confirmation_sent: false,
  };

  if (!supabase) {
    return {
      ok: true,
      stored: false,
      message: "Supabase is not configured yet. Registration saved locally for preview.",
      data: record,
    };
  }

  try {
    const { data, error } = await supabase
      .from("registrations")
      .insert(record)
      .select()
      .single();

    if (error) {
      throw error;
    }

    await sendConfirmationEmail(record.email, record.fullName, record.id);

    return {
      ok: true,
      stored: true,
      message: "Registration saved successfully.",
      data: data as RegistrationRecord,
    };
  } catch (error) {
    return {
      ok: false,
      stored: false,
      message: error instanceof Error ? error.message : "Unable to save registration right now.",
      data: record,
    };
  }
}

export async function saveContactMessage(payload: ContactPayload) {
  const record: ContactRecord = {
    ...payload,
    id: createId(),
    created_at: new Date().toISOString(),
  };

  if (!supabase) {
    return {
      ok: true,
      stored: false,
      message: "Supabase is not configured yet. Message saved locally for preview.",
      data: record,
    };
  }

  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert(record)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return {
      ok: true,
      stored: true,
      message: "Message received successfully.",
      data: data as ContactRecord,
    };
  } catch (error) {
    return {
      ok: false,
      stored: false,
      message: error instanceof Error ? error.message : "Unable to save your message right now.",
      data: record,
    };
  }
}

export async function listRegistrations() {
  if (!supabase) {
    return [] as RegistrationRecord[];
  }

  try {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return (data ?? []) as RegistrationRecord[];
  } catch {
    return [] as RegistrationRecord[];
  }
}

export async function listContactMessages() {
  if (!supabase) {
    return [] as ContactRecord[];
  }

  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return (data ?? []) as ContactRecord[];
  } catch {
    return [] as ContactRecord[];
  }
}

export async function markCheckedIn(id: string) {
  if (!supabase) {
    return { ok: true, checkedIn: true, id };
  }

  try {
    const { error } = await supabase.from("registrations").update({ checked_in: true }).eq("id", id);

    if (error) {
      throw error;
    }

    return { ok: true, checkedIn: true, id };
  } catch {
    return { ok: false, checkedIn: false, id };
  }
}
