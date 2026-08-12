"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Flame, Navigation } from "lucide-react";

export default function Hero() {
  const mapsUrl = "https://maps.google.com/?q=RCCG+Calvary+Parish+Itire+Surulere+Lagos";

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#020617] pt-24 pb-16 text-white md:min-h-screen">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Revival Fire 2026"
        fill
        priority
        className="object-cover object-center opacity-35 transition-opacity duration-700"
      />

      {/* Ambient Radial Fire Glow Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.18)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-black/60 px-5 py-2 backdrop-blur-md">
            <Image
              src="/images/revival-logo.png"
              alt="Revival Nation Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
              REVIVAL NATION PRESENTS
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-8xl lg:text-9xl"
        >
          REVIVAL FIRE <span className="gold-gradient-text">2026</span>
        </motion.h1>

        {/* Scripture Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base italic text-gray-200 sm:text-xl md:text-2xl"
        >
          “But His word was in my heart as a burning fire shut up in my bones...”
          <footer className="mt-2 text-sm font-semibold not-italic text-amber-400">
            Jeremiah 20:9
          </footer>
        </motion.blockquote>

        {/* Event Key Info Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-gray-200 sm:gap-6 sm:text-sm"
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md">
            <Calendar className="h-4 w-4 text-amber-400" />
            <span>15 AUGUST 2026</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>3:00 PM</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span>RCCG CALVARY PARISH CAR PARK, ITIRE, SURULERE, LAGOS</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-9 py-4 text-base font-bold text-black shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.03] hover:shadow-amber-500/40 active:scale-[0.98]"
          >
            <Flame className="h-5 w-5 fill-black text-black" />
            REGISTER NOW
          </Link>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4 text-amber-400" />
            GET DIRECTIONS
          </a>
        </motion.div>
      </div>
    </section>
  );
}