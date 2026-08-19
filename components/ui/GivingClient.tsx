"use client";

import { useState } from "react";
import { Check, Copy, Heart, Landmark, ShieldCheck, Sparkles } from "lucide-react";

type AccountDetail = {
  bank: string;
  accountName: string;
  accountNumber: string;
  purpose: string;
};

const accounts: AccountDetail[] = [
  {
    bank: "Moniepoint MFB",
    accountName: "HARRISON ADEKUNLE (Itire 4 JESUS)",
    accountNumber: "8176089668",
    purpose: "General Giving & Event Support",
  },
  {
    bank: "Zenith Bank",
    accountName: "Revival Nation Project Account",
    accountNumber: "9876543210",
    purpose: "Outreach & Community Care",
  },
];

export default function GivingClient() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  function handleCopy(accountNumber: string, index: number) {
    void navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  }

  return (
    <div className="space-y-12">
      {/* Scripture Banner */}
      <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-900/90 to-zinc-900/80 p-8 text-center backdrop-blur-md">
        <Sparkles className="mx-auto h-8 w-8 text-amber-400" />
        <p className="mt-4 text-xl font-medium text-amber-200 italic">
          “Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.”
        </p>
        <p className="mt-2 text-sm font-semibold tracking-wider text-amber-400 uppercase">2 Corinthians 9:7</p>
      </div>

      {/* Giving Pillars */}
      <div>
        <h3 className="text-2xl font-semibold text-amber-400">Pillars of Giving</h3>
        <p className="mt-2 text-sm text-gray-400">Your seed supports vital kingdom initiatives and transforms lives.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <Heart className="h-8 w-8 text-amber-400" />
            <h4 className="mt-4 text-lg font-semibold text-white">Revival Fire 2026</h4>
            <p className="mt-2 text-sm text-gray-300">
              Support venue setup, sound engineering, stage production, and welcome packages for hundreds of attendees.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <ShieldCheck className="h-8 w-8 text-amber-400" />
            <h4 className="mt-4 text-lg font-semibold text-white">Welfare & Outreach</h4>
            <p className="mt-2 text-sm text-gray-300">
              Provide food hampers, clothing, and essential welfare supplies to families in the Surulere community.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <Landmark className="h-8 w-8 text-amber-400" />
            <h4 className="mt-4 text-lg font-semibold text-white">Evangelism & Media</h4>
            <p className="mt-2 text-sm text-gray-300">
              Expand our digital reach, live streaming, literature distribution, and ongoing follow-up programs.
            </p>
          </div>
        </div>
      </div>

      {/* Bank Account Details */}
      <div>
        <h3 className="text-2xl font-semibold text-amber-400">Bank Transfer Details</h3>
        <p className="mt-2 text-sm text-gray-400">Direct bank deposits or mobile transfers can be made into the official accounts below:</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {accounts.map((acc, idx) => (
            <div key={acc.accountNumber} className="rounded-3xl border border-white/10 bg-zinc-900/90 p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  {acc.purpose}
                </span>
                <Landmark className="h-5 w-5 text-gray-400" />
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Bank Name</p>
                  <p className="text-lg font-bold text-white">{acc.bank}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Account Name</p>
                  <p className="text-base font-semibold text-gray-200">{acc.accountName}</p>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">Account Number</p>
                    <p className="font-mono text-2xl font-bold tracking-widest text-amber-400">{acc.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(acc.accountNumber, idx)}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-amber-500/20 px-3 py-2 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-500 hover:text-black"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check size={14} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation & Inquiries Note */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-center text-sm text-gray-400">
        For transfer confirmations, receipts, or sponsorship inquiries, please reach us at{" "}
        <a href="mailto:revivalnation40@gmail.com" className="font-semibold text-amber-400 underline">
          revivalnation40@gmail.com
        </a>{" "}
        or call <span className="text-white font-medium">+234 704 713 9011</span>.
      </div>
    </div>
  );
}
