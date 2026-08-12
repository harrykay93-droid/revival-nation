import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import { Flame, Calendar, MapPin, Clock } from "lucide-react";

export default function FinalCta() {
  return (
    <RevealSection id="final-cta" className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-zinc-950 to-black py-24 text-white border-t border-amber-500/20">
      {/* Background ambient fire glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/40 bg-amber-500/10 text-amber-400 fire-glow-card">
          <Flame className="h-8 w-8 fill-amber-400 text-amber-400" />
        </div>

        <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl">
          YOUR SEAT IS WAITING
        </h2>

        <p className="mt-4 text-lg text-gray-300 sm:text-xl">
          Join hundreds of believers for an unforgettable move of GOD at <span className="text-amber-400 font-semibold">Revival Fire 2026</span>.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-amber-400" />
            <span>15 August 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>3:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span>RCCG Calvary Parish Car Park, Itire, Surulere, Lagos</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/register"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-10 py-4 text-lg font-bold text-black shadow-2xl shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-amber-500/50 active:scale-[0.98]"
          >
            <Flame className="h-5 w-5 fill-black text-black" />
            REGISTER NOW
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
