"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowRight, Images } from "lucide-react";

const albums = [
  {
    title: "YOU_CAN 2025",
    subtitle: "May 2025 Gathering",
    description: "65 photos capturing worship, fellowship, and ministry moments.",
    src: "/images/hero-bg.jpg",
    href: "/gallery/may-2025-you-can",
    photoCount: 65,
  },
  {
    title: "REVIVAL HOUR",
    subtitle: "September 2025 Service",
    description: "36 photos of intense prayer, praise, and community encounter.",
    src: "/images/about.png",
    href: "/gallery/revival-hour-sept-2025",
    photoCount: 36,
  },
];

export default function GalleryPreview() {
  return (
    <RevealSection id="gallery" className="bg-[#020617] py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="EVENT GALLERY"
          subtitle="A glimpse of the atmosphere, worship, and moments from past Revival Nation gatherings."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {albums.map((album) => (
            <div
              key={album.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10"
            >
              <div className="relative h-72 w-full overflow-hidden bg-black">
                <Image
                  src={album.src}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-md">
                  <Images className="h-3.5 w-3.5" />
                  <span>{album.photoCount} Photos</span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {album.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {album.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {album.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={album.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300 group-hover:translate-x-1"
                  >
                    VIEW ALBUM
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3.5 text-sm font-bold text-amber-400 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black active:scale-[0.98]"
          >
            VIEW FULL GALLERY & ALL ALBUMS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}

