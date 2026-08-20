"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Flame, CheckCircle2, ArrowRight, Images, Sparkles } from "lucide-react";

export default function GatheringRecap() {
  const highlights = [
    "Overwhelming atmosphere of intercession, repentance, and worship",
    "Intense prophetic exhortation and biblical teaching on holiness",
    "Hundreds empowered and commissioned as carriers of God's fire",
    "Spontaneous deliverance, healing, and testimony of spiritual awakening",
  ];

  return (
    <RevealSection id="recap" className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-zinc-950 to-[#020617] py-24 text-white border-t border-white/5">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12)_0%,_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="REVIVAL FIRE 2026 — THE MOVE OF GOD"
          subtitle="Reflecting on an unforgettable sacred encounter at RCCG Calvary Parish, Lagos."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              EVENT IMPACT & RECAP
            </div>

            <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              “The Fire Was Rekindled, Lives Were Recharged.”
            </h3>

            <p className="text-base leading-relaxed text-gray-300">
              On 15 August 2026, believers from across Lagos and beyond gathered under one banner: to seek God’s face, linger in His presence, and receive divine empowerment for this generation.
            </p>

            <p className="text-sm leading-relaxed text-gray-400">
              What began as a holy expectation erupted into hours of heartfelt intercession, fervent worship, and genuine transformation. The fire lit in our hearts continues to burn in homes, workplaces, campuses, and churches.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/gallery/revival-fire-2026"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition hover:scale-105 hover:bg-amber-300"
              >
                <Images className="h-4 w-4 fill-black text-black" />
                VIEW EVENT PHOTOS (100)
              </Link>
              <Link
                href="/testimonies"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <span>READ TESTIMONIES</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/30 to-red-600/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-amber-500/40 bg-zinc-900 shadow-2xl p-6 backdrop-blur-md space-y-6">
                <div className="relative h-60 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gallery/revival-fire-2026/revival-fire-01.jpg"
                    alt="Revival Fire 2026 Moment"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      RCCG Calvary Parish Grounds
                    </span>
                    <span className="text-amber-400 font-bold">15 AUG 2026</span>
                  </div>
                </div>

                <blockquote className="rounded-2xl border border-white/10 bg-black/50 p-4 text-sm italic text-gray-300">
                  “I came burdened and spiritually weary. During the intercessory session, God broke the chains of fear and renewed my prayer altar.”
                  <footer className="mt-2 text-xs font-bold not-italic text-amber-400">
                    — Attendee Testimony
                  </footer>
                </blockquote>

                <div className="flex items-center justify-between pt-2 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
                    Carrying the Fire Forward
                  </span>
                  <Link href="/events" className="text-amber-400 hover:underline font-semibold">
                    Upcoming Gatherings →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
