"use client";

import { useState } from "react";
import type { ContactRecord, RegistrationRecord } from "@/lib/event-service";
import { markCheckedIn } from "@/lib/event-service";
import { Download, Lock, Search, UserCheck, Users, Mail, CheckCircle2, QrCode } from "lucide-react";
import Link from "next/link";

type AdminDashboardProps = {
  registrations: RegistrationRecord[];
  contactMessages: ContactRecord[];
};

export default function AdminDashboard({ registrations: initialRegistrations, contactMessages: initialMessages }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [contactMessages] = useState(initialMessages);
  const [status, setStatus] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const correctPin = process.env.NEXT_PUBLIC_ADMIN_PIN || "2026";
    if (passcode.trim() === correctPin) {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid access passcode. Please try again.");
    }
  }

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

  function exportCSV() {
    if (!registrations.length) return;

    const headers = ["ID", "Full Name", "Email", "Phone", "Gender", "Age Range", "Church", "Address", "Occupation", "Source", "Follow Up", "Prayer Request", "Checked In", "Created At"];
    const rows = registrations.map((r) => [
      `"${r.id}"`,
      `"${r.fullName.replace(/"/g, '""')}"`,
      `"${r.email}"`,
      `"${r.phone}"`,
      `"${r.gender}"`,
      `"${r.ageRange}"`,
      `"${(r.church || "").replace(/"/g, '""')}"`,
      `"${(r.address || "").replace(/"/g, '""')}"`,
      `"${(r.occupation || "").replace(/"/g, '""')}"`,
      `"${(r.source || "").replace(/"/g, '""')}"`,
      `"${r.followUp}"`,
      `"${(r.prayerRequest || "").replace(/"/g, '""')}"`,
      r.checked_in ? "Yes" : "No",
      `"${r.created_at}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `revival-fire-registrations-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-amber-500/20 p-4 text-amber-400">
            <Lock size={32} />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">Admin Authentication</h3>
          <p className="mt-2 text-sm text-gray-400">Enter the administrative passcode to access guest records.</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input
            type="password"
            placeholder="Enter Admin PIN (Default: 2026)"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-center text-white outline-none focus:border-amber-400"
            required
          />

          {authError ? <p className="text-center text-sm text-amber-400">{authError}</p> : null}

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-black hover:bg-amber-400"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  const filteredRegistrations = registrations.filter((r) => {
    const q = searchQuery.toLowerCase();
    return (
      r.fullName.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q) ||
      r.phone.includes(q)
    );
  });

  const checkedInCount = registrations.filter((r) => r.checked_in).length;

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
          <div className="flex items-center gap-3 text-amber-400">
            <Users size={20} />
            <span className="text-sm uppercase tracking-wider text-gray-400">Total Registrations</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{registrations.length}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
          <div className="flex items-center gap-3 text-emerald-400">
            <UserCheck size={20} />
            <span className="text-sm uppercase tracking-wider text-gray-400">Checked In</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{checkedInCount}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
          <div className="flex items-center gap-3 text-amber-400">
            <Mail size={20} />
            <span className="text-sm uppercase tracking-wider text-gray-400">Contact Messages</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-white">{contactMessages.length}</p>
        </div>
      </div>

      {status ? <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">{status}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Registrations List */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-amber-400">Registrations</h3>
              <p className="text-xs text-gray-400">Manage guest check-ins and export records</p>
            </div>

            <button
              onClick={exportCSV}
              disabled={!registrations.length}
              className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 hover:bg-amber-500/20 disabled:opacity-50"
            >
              <Download size={16} /> Export CSV
            </button>
          </div>

          <div className="mt-4 relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, phone, or ref ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
            />
          </div>

          <div className="mt-6 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredRegistrations.length === 0 ? (
              <p className="py-8 text-center text-sm text-gray-400">
                {registrations.length === 0 ? "No registrations recorded yet." : "No matching registrations found."}
              </p>
            ) : (
              filteredRegistrations.map((registration) => (
                <div key={registration.id} className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white text-base">{registration.fullName}</p>
                      <p className="text-sm text-gray-400">{registration.email} • {registration.phone}</p>
                      <p className="text-xs font-mono text-amber-400/80 mt-1">ID: {registration.id}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/checkin/${registration.id}`}
                        target="_blank"
                        className="p-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-amber-500 hover:text-black"
                        title="View Check-in QR Page"
                      >
                        <QrCode size={16} />
                      </Link>

                      <button
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                          registration.checked_in
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : "bg-amber-500 text-black hover:bg-amber-400"
                        }`}
                        onClick={() => handleCheckIn(registration.id)}
                      >
                        {registration.checked_in ? "✓ Checked in" : "Mark Check-in"}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                    <p><span className="text-gray-500">Gender/Age:</span> {registration.gender} ({registration.ageRange})</p>
                    <p><span className="text-gray-500">Church:</span> {registration.church || "N/A"}</p>
                    <p><span className="text-gray-500">Occupation:</span> {registration.occupation}</p>
                    <p><span className="text-gray-500">Follow-up:</span> {registration.followUp}</p>
                  </div>

                  {registration.prayerRequest ? (
                    <div className="rounded-xl border border-white/5 bg-black/30 p-3 text-xs text-gray-300">
                      <span className="font-semibold text-amber-400">Prayer Request:</span> {registration.prayerRequest}
                    </div>
                  ) : null}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Contact Messages List */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-amber-400">Contact Messages</h3>
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold text-amber-300">{contactMessages.length}</span>
          </div>

          <div className="mt-6 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {contactMessages.length === 0 ? (
              <p className="py-8 text-center text-sm text-gray-400">No contact messages received yet.</p>
            ) : (
              contactMessages.map((message) => (
                <div key={message.id} className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{message.name}</p>
                    <span className="text-xs text-gray-500">{new Date(message.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="text-xs text-amber-400">{message.email}</p>
                  <p className="text-sm text-gray-300 mt-2 bg-black/30 p-3 rounded-xl border border-white/5 leading-relaxed">{message.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
