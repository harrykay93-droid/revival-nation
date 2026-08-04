"use client";

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonyCard from "@/components/ui/TestimonyCard";
import { Button } from "@/components/ui/button";

const testimonies = [
  {
    name: "Moses A.",
    role: "Attendee",
    quote: "I came with a heavy heart and left with a renewed sense of hope and purpose.",
  },
  {
    name: "Grace O.",
    role: "Volunteer",
    quote: "The atmosphere was filled with peace, prayer, and the tangible presence of God.",
  },
  {
    name: "Samuel T.",
    role: "Pastor",
    quote: "The message stirred my spirit and challenged me to walk closer with God.",
  },
];

export default function TestimoniesSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="What People Are Saying" subtitle="Testimonies of encounters, healing, and fresh fire." />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonies.map((item) => (
            <TestimonyCard key={item.name} {...item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/testimonies">
            <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black">
              Read More Testimonies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
