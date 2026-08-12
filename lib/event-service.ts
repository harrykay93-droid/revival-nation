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
  phone?: string;
  subject?: string;
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
  email_sent?: boolean;
  admin_notified?: boolean;
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
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

  // Email confirmation is handled server-side in /api/register.
  // This function is kept for direct Supabase use (e.g. admin tools).

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
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Guard: parse JSON only if response is actually JSON (prevents HTML 404 pages from throwing)
    let result: Record<string, unknown> = {};
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      result = await response.json();
    }

    if (response.ok && result.ok) {
      return {
        ok: true,
        stored: result.stored as boolean,
        message: (result.message as string) || "Message sent successfully.",
        data: result.data as ContactRecord,
      };
    }

    if (!response.ok) {
      // API route returned an error — fall through to Supabase fallback
      console.error(`[event-service] /api/contact returned HTTP ${response.status}. Falling back.`);
    } else {
      return {
        ok: false,
        stored: false,
        message: (result.message as string) || "Unable to send your message right now.",
        data: { ...payload, id: createId(), created_at: new Date().toISOString() } as ContactRecord,
      };
    }
  } catch (err) {
    console.error("[event-service] saveContactMessage fetch error, falling back to client Supabase:", err);
  }

  // Fallback to direct client-side Supabase if API endpoint fails or is unavailable
  const record: ContactRecord = {
    ...payload,
    id: createId(),
    created_at: new Date().toISOString(),
    email_sent: false,
    admin_notified: false,
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
    const extraDetails = [];
    if (payload.subject) extraDetails.push(`Subject: ${payload.subject}`);
    if (payload.phone) extraDetails.push(`Phone: ${payload.phone}`);

    const dbMessage = extraDetails.length > 0
      ? `${extraDetails.join(" | ")}\n\n${payload.message}`
      : payload.message;

    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        id: record.id,
        name: record.name,
        email: record.email,
        message: dbMessage,
        created_at: record.created_at,
      })
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
    console.error("[event-service] Supabase fallback insert error:", error);
    return {
      ok: false,
      stored: false,
      message: "We could not save your message right now. Please try again or email us directly at revivalnation40@gmail.com.",
      data: record,
    };
  }
}

export async function resendConfirmationEmail(identifier: { registrationId?: string; email?: string }) {
  try {
    const response = await fetch("/api/resend-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(identifier),
    });

    const result = await response.json();
    return {
      ok: response.ok && result.ok,
      emailSent: result.emailSent ?? false,
      message: result.message || "Processed resend request.",
      data: result.data as RegistrationRecord | undefined,
    };
  } catch (err) {
    return {
      ok: false,
      emailSent: false,
      message: err instanceof Error ? err.message : "Network error during resend attempt.",
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
