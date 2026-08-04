"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { saveRegistration } from "@/lib/event-service";

type FormState = {
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

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  ageRange: "",
  church: "",
  address: "",
  occupation: "",
  source: "",
  prayerRequest: "",
  followUp: "yes",
};

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredFields = [form.fullName, form.email, form.phone, form.gender, form.ageRange, form.address, form.occupation, form.prayerRequest];
    const valid = requiredFields.every((value) => value.trim().length > 0);

    if (!valid) {
      setError("Please fill in the required fields before submitting.");
      setSubmitted(false);
      return;
    }

    setError("");
    setIsSubmitting(true);

    const result = await saveRegistration({
      ...form,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      church: form.church.trim(),
      address: form.address.trim(),
      occupation: form.occupation.trim(),
      source: form.source.trim(),
      prayerRequest: form.prayerRequest.trim(),
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
      <h3 className="text-2xl font-semibold text-amber-400">Register your attendance</h3>
      <p className="mt-3 text-sm text-gray-400">
        We are preparing a warm and prayerful environment for every guest.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Full Name</span>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Phone Number</span>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Gender</span>
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Age Range</span>
            <select name="ageRange" value={form.ageRange} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required>
              <option value="">Select</option>
              <option value="under-18">Under 18</option>
              <option value="18-25">18-25</option>
              <option value="26-39">26-39</option>
              <option value="40-59">40-59</option>
              <option value="60+">60+</option>
            </select>
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Church Name</span>
            <input name="church" value={form.church} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Address</span>
            <input name="address" value={form.address} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Occupation</span>
            <input name="occupation" value={form.occupation} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">How did you hear about us?</span>
            <input name="source" value={form.source} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Need Follow-up</span>
            <select name="followUp" value={form.followUp} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>

        <label className="block text-sm text-gray-300">
          <span className="mb-2 block">Prayer Request</span>
          <textarea name="prayerRequest" rows={4} value={form.prayerRequest} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
        </label>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 text-black hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-amber-300">
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </Button>

        {error ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300">{error}</p> : null}

        {submitted ? (
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
            Registration received. We will contact you shortly.
          </p>
        ) : null}
      </form>
    </div>
  );
}
