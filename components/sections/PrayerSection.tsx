"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PrayerSection() {
  return (
    <section id="prayer" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Prayer & Intercession" subtitle="Bring your burdens before the Lord and receive strength in the journey." />

        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/80 to-black p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-3xl font-semibold text-amber-400">Let us pray with you</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
              Whether you need healing, guidance, family restoration, or a fresh touch from God, this is a sacred place to surrender your heart.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">Prayer Request</p>
            <p className="mt-4 text-gray-300">
              Share your request and let the community stand with you in prayer.
            </p>
            <Link href="/prayer" className="mt-6 inline-flex">
              <Button className="bg-amber-500 text-black hover:bg-amber-400">Submit Prayer Request</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
