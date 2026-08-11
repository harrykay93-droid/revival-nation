"use client";

import Link from "next/link";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";

const galleryItems = [
  {
    title: "May 2025 You Can Album",
    description: "65 photos capturing worship, fellowship, and ministry moments.",
    src: "/images/hero-bg.jpg",
    href: "/gallery/may-2025-you-can",
  },
  {
    title: "Revival Hour Sept 2025",
    description: "36 photos of intense prayer, praise, and community encounter.",
    src: "/images/about.png",
    href: "/gallery/revival-hour-sept-2025",
  },
  {
    title: "Outreach & Community",
    description: "Moments of love, compassion, and kingdom impact.",
    src: "/images/revival-logo.png",
    href: "/gallery",
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
              View Full Gallery & All Albums
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
