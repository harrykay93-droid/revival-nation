"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveContactMessage } from "@/lib/event-service";

export default function PrayerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !request.trim()) {
      setError("Please fill in your name and prayer request.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await saveContactMessage({
        name,
        email: email.trim() || "Anonymous / No Email",
        message: `[PRAYER REQUEST] ${request}`,
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setRequest("");
      } else {
        setError(res.message || "Unable to submit your prayer request right now.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 shadow-2xl shadow-black/30">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Name *</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400"
              required
            />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Email (Optional)</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Leave blank if you prefer anonymity"
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400"
            />
          </label>
        </div>

        <label className="block text-sm text-gray-300">
          <span className="mb-2 block">Prayer Request *</span>
          <textarea
            rows={6}
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Share what you are believing God for..."
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400"
            required
          />
        </label>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 font-semibold text-black hover:bg-amber-400 disabled:opacity-50">
          {isSubmitting ? "Submitting Prayer Request..." : "Submit Prayer Request"}
        </Button>

        {error ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300">{error}</p> : null}

        {submitted ? (
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
            Amen! Your prayer request has been received. Our prayer team will stand in agreement with you in faith.
          </p>
        ) : null}
      </form>
    </div>
  );
}
