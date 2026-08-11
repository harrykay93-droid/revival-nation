"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/ui/button";
import { saveRegistration, type RegistrationRecord } from "@/lib/event-service";
import { CheckCircle2, Download, Printer, RefreshCw } from "lucide-react";

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
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [ticketData, setTicketData] = useState<RegistrationRecord | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredFields = [form.fullName, form.email, form.phone, form.gender, form.ageRange, form.address, form.occupation, form.prayerRequest];
    const valid = requiredFields.every((value) => value.trim().length > 0);

    if (!valid) {
      setError("Please fill in all required fields before submitting.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await saveRegistration(form);
      if (res.ok && res.data) {
        setTicketData(res.data);
        const qrDataUrl = await QRCode.toDataURL(res.data.id, { margin: 2, width: 240 });
        setQrCodeUrl(qrDataUrl);
      } else {
        setError(res.message || "Failed to submit registration. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialState);
    setTicketData(null);
    setQrCodeUrl("");
    setError("");
  }

  function handlePrint() {
    window.print();
  }

  if (ticketData && qrCodeUrl) {
    return (
      <div className="rounded-3xl border border-amber-500/30 bg-zinc-900/90 p-8 text-white shadow-2xl backdrop-blur-sm print:border-none print:bg-white print:text-black">
        <div className="flex items-center gap-3 text-emerald-400 print:text-emerald-700">
          <CheckCircle2 size={28} />
          <h3 className="text-2xl font-bold">Registration Confirmed!</h3>
        </div>

        <p className="mt-2 text-sm text-gray-300 print:text-gray-700">
          Thank you for registering for Revival Fire 2026. Here is your digital guest pass. Please present this QR code at check-in.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6 print:border-gray-300 print:bg-gray-50">
          <div className="grid gap-6 md:grid-cols-[1fr_auto]">
            <div className="space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-400 print:text-amber-700 font-semibold">Event</p>
                <p className="text-xl font-bold">Revival Fire 2026</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 print:text-gray-600">Guest Name</p>
                <p className="text-lg font-semibold text-white print:text-black">{ticketData.fullName}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 print:text-gray-600">Reference ID</p>
                  <p className="font-mono text-sm text-amber-300 print:text-amber-800">{ticketData.id}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 print:text-gray-600">Date & Time</p>
                  <p className="text-sm font-medium">Saturday, 15 Aug 2026 (3:00 PM)</p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 print:text-gray-600">Venue</p>
                <p className="text-sm text-gray-300 print:text-gray-800">RCCG Calvary Parish Car Park, Itire, Surulere, Lagos</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white p-4 text-black">
              <img src={qrCodeUrl} alt="Check-in QR Code" className="h-44 w-44 object-contain" />
              <p className="mt-2 text-xs font-semibold text-gray-600">Scan for Check-in</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 print:hidden">
          <Button onClick={handlePrint} className="flex items-center gap-2 bg-amber-500 text-black hover:bg-amber-400">
            <Printer size={18} /> Print / Save Pass
          </Button>
          <a
            href={qrCodeUrl}
            download={`revival-fire-pass-${ticketData.id}.png`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            <Download size={18} /> Download QR Code
          </a>
          <Button onClick={handleReset} variant="outline" className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10">
            <RefreshCw size={18} /> Register Another Guest
          </Button>
        </div>
      </div>
    );
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
            <span className="mb-2 block">Full Name *</span>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Email Address *</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Phone Number *</span>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Gender *</span>
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Age Range *</span>
            <select name="ageRange" value={form.ageRange} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required>
              <option value="">Select</option>
              <option value="under-18">Under 18</option>
              <option value="18-25">18-25</option>
              <option value="26-39">26-39</option>
              <option value="40-59">40-59</option>
              <option value="60+">60+</option>
            </select>
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Church Name (Optional)</span>
            <input name="church" value={form.church} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Residential Address *</span>
            <input name="address" value={form.address} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Occupation *</span>
            <input name="occupation" value={form.occupation} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">How did you hear about us?</span>
            <input name="source" value={form.source} onChange={handleChange} placeholder="e.g. Friend, Social Media, Banner" className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" />
          </label>
          <label className="text-sm text-gray-300">
            <span className="mb-2 block">Would you like a follow-up?</span>
            <select name="followUp" value={form.followUp} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>

        <label className="block text-sm text-gray-300">
          <span className="mb-2 block">Prayer Request / Expectation *</span>
          <textarea name="prayerRequest" rows={4} value={form.prayerRequest} onChange={handleChange} placeholder="Share your prayer requests or expectations for the event..." className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-amber-400" required />
        </label>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 font-semibold text-black hover:bg-amber-400 disabled:opacity-50">
          {isSubmitting ? "Submitting Registration..." : "Complete Registration"}
        </Button>

        {error ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300">{error}</p> : null}
      </form>
    </div>
  );
}
