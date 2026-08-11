"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { ArrowLeft, Maximize2, Images } from "lucide-react";
import type { GalleryAlbum } from "@/lib/gallery";

type AlbumViewClientProps = {
  album: GalleryAlbum;
};

export default function AlbumViewClient({ album }: AlbumViewClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      {/* Return Button Top */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
        <Link href="/gallery">
          <Button variant="outline" className="flex items-center gap-2 border-white/20 text-white hover:bg-amber-500 hover:text-black">
            <ArrowLeft size={18} /> Return to Main Gallery
          </Button>
        </Link>
        <span className="flex items-center gap-2 text-sm text-gray-400">
          <Images size={16} className="text-amber-400" /> {album.images.length} High Quality Photos
        </span>
      </div>

      <SectionTitle title={album.title} subtitle={album.description} />

      {/* Grid of Clickable Photos */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {album.images.map((image, index) => (
          <div
            key={image}
            onClick={() => setLightboxIndex(index)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/20"
          >
            <img
              src={image}
              alt={`${album.title} photo ${index + 1}`}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover overlay with expand prompt */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="rounded-full bg-amber-500 p-3 text-black">
                <Maximize2 size={24} />
              </div>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-white">Click to Expand</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={album.images}
        currentIndex={lightboxIndex}
        title={album.title}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Return Button Bottom */}
      <div className="flex justify-center border-t border-white/10 pt-10">
        <Link href="/gallery">
          <Button variant="outline" className="flex items-center gap-2 border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black">
            <ArrowLeft size={18} /> Return to All Gallery Albums
          </Button>
        </Link>
      </div>
    </div>
  );
}
