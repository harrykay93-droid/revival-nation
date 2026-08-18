"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, Calendar, Globe, MapPin, ArrowRight, Flame } from "lucide-react";

export default function WeeklySchedule() {
  const schedules = [
    {
      title: "Online Intercessory Watch",
      frequency: "Every Tuesday & Thursday",
      time: "8:00 PM — 9:30 PM (WAT)",
      mode: "Virtual (Google Meet & Mixlr)",
      icon: Globe,
      description: "A focused altar of prayer, warfare, and intercession for families, ministries, and the nation.",
    },
    {
      title: "Monthly Revival Hour",
      frequency: "Last Saturday of Each Month",
      time: "4:00 PM — 6:30 PM",
      mode: "In-Person & Live Stream",
      icon: Flame,
      description: "An intensive atmosphere of extended worship, practical biblical teaching, and the prophetic move.",
    },
    {
      title: "Youth & Campus Discipleship",
      frequency: "2nd & 4th Sunday",
      time: "5:00 PM — 7:00 PM",
      mode: "Fellowship Grounds",
      icon: Calendar,
      description: "Equipping young adults and students to stand unashamed for Christ on campuses and in careers.",
    },
  ];

  return (
    <RevealSection id="schedule" className="bg-[#020617] py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="WEEKLY & MONTHLY GATHERINGS"
          subtitle="Stay rooted and consistently fueled. Join our regular fellowship and prayer altars."
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
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-amber-300">
                      {item.frequency}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-gray-300">
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

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 transition hover:text-amber-300"
                  >
                    <span>GET ACCESS DETAILS</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
