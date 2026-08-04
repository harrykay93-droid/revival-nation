"use client";

import { useState } from "react";
import type { ContactRecord, RegistrationRecord } from "@/lib/event-service";
import { markCheckedIn } from "@/lib/event-service";

type AdminDashboardProps = {
  registrations: RegistrationRecord[];
  contactMessages: ContactRecord[];
};

export default function AdminDashboard({ registrations: initialRegistrations, contactMessages: initialMessages }: AdminDashboardProps) {
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [contactMessages] = useState(initialMessages);
  const [status, setStatus] = useState<string>("");

  async function handleCheckIn(id: string) {
    const result = await markCheckedIn(id);
    if (result.ok) {
      setRegistrations((current) =>
        current.map((registration) =>
          registration.id === id ? { ...registration, checked_in: true } : registration
        )
      );
      setStatus("Guest marked as checked in.");
      return;
    }

    setStatus("Unable to update check-in status right now.");
  }

  return (
    <div className="space-y-10">
      {status ? <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">{status}</p> : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-amber-400">Registrations</h3>
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm text-amber-300">{registrations.length}</span>
          </div>

          <div className="mt-6 space-y-4">
            {registrations.length === 0 ? (
              <p className="text-sm text-gray-400">No registrations yet.</p>
            ) : (
              registrations.map((registration) => (
                <div key={registration.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{registration.fullName}</p>
                      <p className="text-sm text-gray-400">{registration.email}</p>
                    </div>
                    <button
                      className="rounded-full border border-amber-500/40 px-3 py-1 text-sm text-amber-300"
                      onClick={() => handleCheckIn(registration.id)}
                    >
                      {registration.checked_in ? "Checked in" : "Check in"}
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">Phone: {registration.phone}</p>
                  <p className="text-sm text-gray-400">Prayer request: {registration.prayerRequest}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-amber-400">Contact Messages</h3>
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm text-amber-300">{contactMessages.length}</span>
          </div>

          <div className="mt-6 space-y-4">
            {contactMessages.length === 0 ? (
              <p className="text-sm text-gray-400">No messages yet.</p>
            ) : (
              contactMessages.map((message) => (
                <div key={message.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="font-semibold text-white">{message.name}</p>
                  <p className="text-sm text-gray-400">{message.email}</p>
                  <p className="mt-3 text-sm text-gray-300">{message.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
