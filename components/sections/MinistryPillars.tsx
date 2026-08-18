"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { Flame, HeartHandshake, BookOpen, Sparkles, ArrowRight, Shield } from "lucide-react";

export default function MinistryPillars() {
  const pillars = [
    {
      icon: Flame,
      title: "Intercession & Prayer Altars",
      tagline: "Standing in the Gap",
      description:
        "Cultivating consistent, fervent prayer lives through weekly online watches, prayer retreats, and continuous intercession for souls and nations.",
      link: "/prayer",
      cta: "Join the Prayer Watch",
    },
    {
      icon: Sparkles,
      title: "Revival Gatherings & Nights",
      tagline: "Supernatural Encounters",
      description:
        "Hosting transformative gatherings, conferences, and sacred worship assemblies where the Holy Spirit moves with power to convict, heal, and commission.",
      link: "/events",
      cta: "Explore Gatherings",
    },
    {
      icon: BookOpen,
      title: "Kingdom Discipleship",
      tagline: "Rooted in the Word",
      description:
        "Equipping believers with sound biblical doctrine, spiritual disciplines, and mentorship to live consecrated lives in modern culture.",
      link: "/about",
      cta: "Our Convictions",
    },
    {
      icon: HeartHandshake,
      title: "Compassionate Outreach",
      tagline: "Love in Action",
      description:
        "Extending the practical love of Christ to underserved communities through welfare initiatives, youth mentorship, and local evangelism.",
      link: "/give",
      cta: "Partner With Us",
    },
  ];

  return (
    <RevealSection id="pillars" className="bg-[#020617] py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="MINISTRY ARMS & PILLARS"
          subtitle="How Revival Nation actively serves God's kingdom and equips a generation for eternal impact."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-[#020617] p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/5 px-3.5 py-1 text-xs font-semibold text-amber-400">
                    {pillar.tagline}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {pillar.description}
                </p>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300 group-hover:translate-x-1"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="h-4 w-4" />
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
