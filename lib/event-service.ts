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
