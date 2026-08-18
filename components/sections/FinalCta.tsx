"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import { Flame, HeartHandshake, Sparkles, Mail } from "lucide-react";

export default function FinalCta() {
  return (
    <RevealSection id="final-cta" className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-zinc-950 to-black py-28 text-white border-t border-amber-500/20">
      {/* Background ambient fire glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.18)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-400 fire-glow-card">
          <Flame className="h-8 w-8 fill-amber-400 text-amber-400" />
        </div>

        <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl">
          BE A PART OF THIS <br />
          <span className="gold-gradient-text">REVIVAL GENERATION</span>
        </h2>

        <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-xl">
          God is raising men and women with burning hearts for His presence. Whether through fervent prayer, joining our gatherings, or financial partnership, your involvement makes an eternal impact.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href="/give"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-9 py-4 text-base font-bold text-black shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-amber-500/50 active:scale-[0.98]"
          >
            <HeartHandshake className="h-5 w-5" />
            PARTNER & SUPPORT THE MISSION
          </Link>
          <Link
            href="/prayer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            REQUEST PRAYER
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-4 text-base font-medium text-gray-300 transition hover:text-white hover:border-white/20"
          >
            <Mail className="h-4 w-4" />
            CONTACT US
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
