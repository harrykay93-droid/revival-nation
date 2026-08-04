"use client";

import { useEffect, useState } from "react";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/site";

export default function Countdown() {
  const targetDate = new Date(siteConfig.event.date);

  const calculateTime = () => {
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTime());
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <RevealSection className="bg-[linear-gradient(135deg,#b91c1c,#7f1d1d)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Countdown to Revival Fire" subtitle="Join us as we prepare for a fresh move of God." />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["Days", timeLeft.days],
            ["Hours", timeLeft.hours],
            ["Minutes", timeLeft.minutes],
            ["Seconds", timeLeft.seconds],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-8 text-center shadow-lg shadow-black/20 backdrop-blur">
              <div className="text-5xl font-bold">{String(value).padStart(2, "0")}</div>
              <div className="mt-2 uppercase tracking-wider text-sm text-gray-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}