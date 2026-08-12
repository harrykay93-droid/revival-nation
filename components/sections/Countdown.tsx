"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Flame } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";

export default function Countdown() {
  // Event target instant: 15 August 2026 at 3:00 PM Lagos Time (UTC+1 -> 14:00:00 UTC)
  const eventTimestamp = Date.UTC(2026, 7, 15, 14, 0, 0);

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isFinished: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = eventTimestamp - Date.now();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isFinished: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventTimestamp]);

  return (
    <RevealSection className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-red-950/40 to-[#020617] py-20 text-white border-y border-amber-500/20">
      {/* Background glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(185,28,28,0.25)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
          🔥 COUNTDOWN TO REVIVAL FIRE
        </h2>
        <p className="mt-3 text-base text-gray-300 sm:text-lg">
          Join us as we prepare for a fresh move of GOD.
        </p>

        {timeLeft.isFinished ? (
          <div className="mt-10 rounded-3xl border border-amber-500/40 bg-black/60 p-8 shadow-2xl backdrop-blur-md">
            <h3 className="text-3xl font-black text-amber-400 sm:text-5xl">
              REVIVAL FIRE 2026 IS HERE!
            </h3>
            <p className="mt-3 text-gray-200">
              The gathering has begun. Join us at RCCG Calvary Parish Car Park, Itire, Surulere, Lagos.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {[
              ["DAYS", timeLeft.days],
              ["HOURS", timeLeft.hours],
              ["MINUTES", timeLeft.minutes],
              ["SECONDS", timeLeft.seconds],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="group rounded-2xl border border-amber-500/30 bg-black/70 p-6 text-center shadow-xl shadow-red-950/20 backdrop-blur-md transition hover:border-amber-500/60"
              >
                <div className="font-mono text-4xl font-black text-white sm:text-6xl gold-gradient-text">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            href="/register"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-3.5 text-base font-bold text-black shadow-lg shadow-amber-500/20 transition hover:scale-105 hover:bg-amber-300 active:scale-[0.98]"
          >
            <Flame className="h-5 w-5 fill-black text-black" />
            REGISTER NOW
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}