"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveContactMessage } from "@/lib/event-service";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setError("Please complete all required fields (Full Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await saveContactMessage({
        name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        subject: subject.trim() || undefined,
        message: message.trim(),
      });

      if (res.ok) {
        setSubmitted(true);
        setStatusMessage(res.message || "Thank you for reaching out. We will respond soon.");
        setFullName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setError(res.message || "Unable to send your message right now.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 md:p-8 text-white shadow-2xl shadow-black/30 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-amber-400">Send Us a Message</h3>
      <p className="mt-2 text-sm text-gray-400">
        Have a question or prayer request? Fill out the form below and the Revival Nation team will get back to you.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm text-gray-300">
            <span className="mb-2 block font-medium">Full Name <span className="text-amber-400">*</span></span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-400 transition"
              required
            />
          </label>

          <label className="block text-sm text-gray-300">
            <span className="mb-2 block font-medium">Email Address <span className="text-amber-400">*</span></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. john@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-400 transition"
              required
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm text-gray-300">
            <span className="mb-2 block font-medium">Phone Number</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +234 801 234 5678"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-400 transition"
            />
          </label>

          <label className="block text-sm text-gray-300">
            <span className="mb-2 block font-medium">Subject</span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. General Inquiry / Prayer Request"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-400 transition"
            />
          </label>
        </div>

        <label className="block text-sm text-gray-300">
          <span className="mb-2 block font-medium">Message <span className="text-amber-400">*</span></span>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-amber-400 transition resize-y"
            required
          />
        </label>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 py-3.5 font-bold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-300 active:scale-[0.98] disabled:opacity-50"
        >
          {isSubmitting ? "Sending Message..." : "Submit Message"}
        </Button>

        {error ? (
          <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-300">
            {error}
          </p>
        ) : null}

        {submitted ? (
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
            {statusMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
