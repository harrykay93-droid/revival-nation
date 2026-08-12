import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Music, BookOpen, Flame, Sparkles } from "lucide-react";

export default function WhatToExpect() {
  const expectations = [
    {
      icon: Music,
      title: "POWERFUL WORSHIP",
      description: "A time of heartfelt worship and praise.",
    },
    {
      icon: BookOpen,
      title: "THE WORD",
      description: "Biblical teaching and revelation from GOD's Word.",
    },
    {
      icon: Flame,
      title: "PRAYER",
      description: "A focused atmosphere of prayer and spiritual engagement.",
    },
    {
      icon: Sparkles,
      title: "ENCOUNTER",
      description: "An opportunity to seek GOD and experience spiritual renewal.",
    },
  ];

  return (
    <RevealSection id="expect" className="bg-[#020617] py-20 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="WHAT TO EXPECT"
          subtitle="Prepare your heart for a divine encounter."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/90 hover:shadow-amber-500/10"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-amber-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
