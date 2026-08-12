import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Calendar, Clock, MapPin, Building2 } from "lucide-react";

export default function EventDetails() {
  const cards = [
    {
      icon: Calendar,
      title: "DATE",
      value: "15 August 2026",
      subtitle: "Saturday",
    },
    {
      icon: Clock,
      title: "TIME",
      value: "3:00 PM",
      subtitle: "Prompt",
    },
    {
      icon: Building2,
      title: "VENUE",
      value: "RCCG Calvary Parish Car Park",
      subtitle: "Main Car Park Grounds",
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Itire, Surulere",
      subtitle: "Lagos, Nigeria",
    },
  ];

  return (
    <RevealSection id="details" className="bg-[#020617] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="EVENT DETAILS"
          subtitle="Everything you need to know for Revival Fire 2026."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-amber-500/10"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-xl font-bold text-white tracking-tight">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}