"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { markCheckedIn } from "@/lib/event-service";
import type { RegistrationRecord } from "@/lib/event-service";

type CheckInPageProps = {
  registration?: RegistrationRecord;
};

export default function CheckInPage({ registration }: CheckInPageProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (!registration) {
      return;
    }

    async function generateQr() {
      const currentRegistration = registration;
      if (!currentRegistration) {
        return;
      }

      const encoded = await QRCode.toDataURL(currentRegistration.id);
      setQrCodeUrl(encoded);
    }

    void generateQr();
  }, [registration]);

  async function handleCheckIn() {
    if (!registration) {
      return;
    }

    const result = await markCheckedIn(registration.id);
    setStatus(result.ok ? "Guest checked in successfully." : "Unable to complete check-in right now.");
  }

  if (!registration) {
    return <p className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-300">No registration found for this check-in link.</p>;
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 text-white shadow-2xl shadow-black/30">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-amber-400">{registration.fullName}</h3>
          <p className="text-sm text-gray-400">Reference ID: {registration.id}</p>
          <p className="text-sm text-gray-400">Email: {registration.email}</p>
          <p className="text-sm text-gray-400">Phone: {registration.phone}</p>
          <p className="text-sm text-gray-400">Prayer request: {registration.prayerRequest}</p>
          <button onClick={handleCheckIn} className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black hover:bg-amber-400">
            Mark as checked in
          </button>
          {status ? <p className="text-sm text-emerald-300">{status}</p> : null}
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">Scan QR</p>
          {qrCodeUrl ? <img src={qrCodeUrl} alt="Registration QR code" className="mx-auto h-56 w-56 rounded-2xl" /> : <p className="text-sm text-gray-400">Generating QR...</p>}
        </div>
      </div>
    </div>
  );
}
