"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonyCard from "@/components/ui/TestimonyCard";
import { ArrowRight } from "lucide-react";

const testimonies = [
  {
    name: "Moses A.",
    role: "Attendee",
    quote: "I came with a heavy heart and left with a renewed sense of hope and purpose.",
  },
  {
    name: "Grace O.",
    role: "Volunteer",
    quote: "The atmosphere was filled with peace, prayer, and the tangible presence of GOD.",
  },
  {
    name: "Samuel T.",
    role: "Pastor",
    quote: "The message stirred my spirit and challenged me to walk closer with GOD.",
  },
];

export default function TestimoniesSection() {
  return (
    <RevealSection id="testimonies" className="bg-[#020617] py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="LIVES ARE BEING TRANSFORMED"
          subtitle="Stories of divine encounter and kingdom impact from our community."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonies.map((item) => (
            <TestimonyCard key={item.name} {...item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/testimonies"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-bold text-amber-400 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black active:scale-[0.98]"
          >
            READ MORE TESTIMONIES
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}

