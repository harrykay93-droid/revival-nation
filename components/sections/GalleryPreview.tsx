"use client";

import Link from "next/link";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";

const galleryItems = [
  {
    title: "Worship Night",
    description: "A sacred time of worship, prayer, and unity.",
    src: "/images/hero-bg.jpg.jpg",
  },
  {
    title: "Prayer Gathering",
    description: "A faithful community gathering in expectation.",
    src: "/images/about.jpg.png",
  },
  {
    title: "Outreach Moment",
    description: "Moments of love, compassion, and kingdom impact.",
    src: "/images/revival-logo.png.png",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Moments From The Journey" subtitle="A glimpse of the atmosphere, people, and purpose behind Revival Nation." />

        <GalleryGrid items={galleryItems} />

        <div className="mt-10 flex justify-center">
          <Link href="/gallery">
            <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
