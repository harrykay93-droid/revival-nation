import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Sparkles, Flame, Send } from "lucide-react";

export default function WhyRevivalFire() {
  const pillars = [
    {
      icon: Sparkles,
      title: "ENCOUNTER",
      description: "Encounter GOD in a fresh and powerful way.",
    },
    {
      icon: Flame,
      title: "TRANSFORMATION",
      description: "Move beyond an emotional experience into genuine transformation.",
    },
    {
      icon: Send,
      title: "COMMISSION",
      description: "Receive grace to carry the fire into your generation.",
    },
  ];

  return (
    <RevealSection id="why-revival-fire" className="bg-[#020617] py-20 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="WHY REVIVAL FIRE?"
          subtitle="“But His word was in my heart as a burning fire shut up in my bones...” — Jeremiah 20:9"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
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
