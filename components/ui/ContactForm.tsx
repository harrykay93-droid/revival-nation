"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { saveContactMessage } from "@/lib/event-service";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredFields = [form.name, form.email, form.message];
    const valid = requiredFields.every((value) => value.trim().length > 0);

    if (!valid) {
      setError("Please complete all required fields before sending your message.");
      setSubmitted(false);
      return;
    }

    setError("");
    setIsSubmitting(true);

    const result = await saveContactMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setError(result.message);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 text-white shadow-2xl shadow-black/30">
      <h3 className="text-2xl font-semibold text-amber-400">Send us a message</h3>
      <p className="mt-3 text-sm text-gray-400">
        We would love to hear from you and support you in prayer.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Name</span>
            <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
        </div>

        <label className="block text-sm text-gray-300">
          <span className="mb-2 block">Message</span>
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
        </label>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 text-black hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-amber-300">
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>

        {error ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300">{error}</p> : null}

        {submitted ? (
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
            Thank you for reaching out. We will respond soon.
          </p>
        ) : null}
      </form>
    </div>
  );
}
