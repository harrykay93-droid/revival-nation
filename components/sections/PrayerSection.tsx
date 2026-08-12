"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { HeartHandshake, ArrowRight } from "lucide-react";

export default function PrayerSection() {
  return (
    <RevealSection id="prayer" className="bg-[#020617] py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-red-950/40 p-8 shadow-2xl backdrop-blur-md sm:p-12">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <HeartHandshake className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
              NEED PRAYER?
            </h2>

            <blockquote className="mt-4 text-xl font-semibold italic text-amber-400 sm:text-2xl">
              “You don't have to carry it alone.”
            </blockquote>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Share your prayer request with us. Our prayer team will stand with you in prayer.
            </p>

            <div className="mt-8">
              <Link
                href="/prayer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-9 py-4 text-base font-bold text-black shadow-xl shadow-amber-500/20 transition-all hover:scale-105 hover:bg-amber-300 active:scale-[0.98]"
              >
                SUBMIT A PRAYER REQUEST
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

