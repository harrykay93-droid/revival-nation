"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, Calendar, Globe, MapPin, ArrowRight, Flame, Sparkles } from "lucide-react";

export default function WeeklySchedule() {
  const schedules = [
    {
      title: "Online Intercessory Altar",
      tag: "Weekly",
      frequency: "Every Monday",
      time: "9:00 PM (WAT)",
      mode: "Online (Virtual Altar)",
      icon: Globe,
      description:
        "A focused space of passionate prayer, spiritual warfare, and seeking the Lord for souls and revival.",
    },
    {
      title: "Monthly Revival Hour",
      tag: "Monthly",
      frequency: "Once Every Month",
      time: "Sacred Service",
      mode: "Different Churches / Stream",
      icon: Flame,
      description:
        "A dedicated sacred service characterized by deep worship, prophetic teaching, and intense prayers.",
    },
    {
      title: "Yearly Crusade",
      tag: "Yearly",
      frequency: "Every August",
      time: "Major Annual Gathering",
      mode: "Open Air / Open Space",
      icon: Sparkles,
      description:
        "Major event of the Year characterized by intense prayers, worship, and the word.",
    },
  ];

  return (
    <RevealSection id="schedule" className="bg-[#020617] py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="REGULAR GATHERINGS & CRUSADES"
          subtitle="Stay rooted and consistently fueled. Join our regular fellowship, sacred assemblies, and crusades."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {schedules.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-zinc-900/70 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900/90 hover:shadow-amber-500/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{item.frequency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{item.mode}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 transition hover:text-amber-300"
                  >
                    <span>VIEW EVENT DETAILS</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-gray-400 hover:text-white transition"
                  >
                    Get Link
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
