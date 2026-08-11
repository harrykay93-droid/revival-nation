"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number | null;
  title?: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ImageLightbox({ images, currentIndex, title, onClose, onNavigate }: ImageLightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex !== null && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
      if (e.key === "ArrowRight" && currentIndex !== null && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity">
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          {title ? <p className="text-lg font-bold text-amber-400">{title}</p> : null}
          <p className="text-sm text-gray-300">
            Photo <span className="font-semibold text-white">{currentIndex + 1}</span> of {images.length}
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-500 hover:text-black"
        >
          <X size={18} /> Close & Return
        </button>
      </div>

      {/* Prev Button */}
      {hasPrev ? (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-all hover:bg-amber-500 hover:text-black"
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>
      ) : null}

      {/* Main Image Container */}
      <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
        <img
          src={currentImage}
          alt={title ? `${title} photo ${currentIndex + 1}` : `Photo ${currentIndex + 1}`}
          className="max-h-[80vh] w-auto max-w-[85vw] object-contain"
        />
      </div>

      {/* Next Button */}
      {hasNext ? (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/20 bg-black/60 p-3 text-white transition-all hover:bg-amber-500 hover:text-black"
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>
      ) : null}

      {/* Bottom Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400">
        Use arrow keys ← → to navigate • ESC or click Close to return
      </div>
    </div>
  );
}
