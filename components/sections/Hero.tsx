"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Sparkles, HeartHandshake, ArrowRight, ShieldCheck, Users, FlameKindling, Church } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      icon: Users,
      value: "CONTINOUSLY",
      label: "TOUCHING LIVES",
    },
    {
      icon: FlameKindling,
      value: "100+ hrs",
      label: "PRAYER ALTARS",
    },
    {
      icon: Church,
      value: "10+",
      label: "REVIVAL GATHERINGS",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "KINGDOM COMMITTED",
    },
  ];

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-[#020617] pt-28 pb-20 text-white md:min-h-screen">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Revival Nation Ministry"
        fill
        priority
        className="object-cover object-center opacity-25 transition-opacity duration-700"
      />

      {/* Ambient Radial Fire & Gold Glow Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.18)_0%,_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#020617]/75 to-[#020617]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
        {/* Ministry Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-black/70 px-5 py-2 backdrop-blur-md shadow-lg shadow-amber-500/10">
            <Flame className="h-4 w-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              REVIVAL NATION MINISTRY
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
        >
          RAISING A GENERATION <br />
          <span className="gold-gradient-text">THAT CARRIES THE FIRE</span>
        </motion.h1>

        {/* Subtitle / Calling */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-xl md:text-2xl"
        >
          Awakening hearts, strengthening passionate prayer, and empowering believers to take God’s supernatural presence into every nation and sphere of life.
        </motion.p>

        {/* Scripture Quote */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-sm italic text-amber-200/90 sm:text-base"
        >
          “His word was in my heart as a burning fire shut up in my bones...” — <span className="font-semibold text-amber-400 not-italic">Jeremiah 20:9</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-8 py-4 text-base font-bold text-black shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.03] hover:shadow-amber-500/40 active:scale-[0.98]"
          >
            <Sparkles className="h-5 w-5 fill-black text-black" />
            DISCOVER OUR MISSION
          </Link>
          <Link
            href="/prayer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-4 text-base font-semibold text-amber-300 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black active:scale-[0.98]"
          >
            <Flame className="h-4 w-4" />
            SUBMIT PRAYER REQUEST
          </Link>
          <Link
            href="/give"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40 active:scale-[0.98]"
          >
            <HeartHandshake className="h-4 w-4 text-amber-400" />
            PARTNER & GIVE
          </Link>
        </motion.div>

        {/* Ministry Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        >
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-white/10 bg-black/60 p-5 text-center shadow-xl backdrop-blur-md transition hover:border-amber-500/50 hover:bg-black/80"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-mono text-2xl font-black text-white sm:text-3xl gold-gradient-text">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-amber-400 transition-colors">
                  {item.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}