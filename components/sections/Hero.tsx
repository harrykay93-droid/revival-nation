"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image src="/images/about.png" alt="Revival Fire" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(2,6,23,0.72))] backdrop-blur-sm" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image src="/images/revival-logo.png" alt="Revival Nation" width={120} height={120} className="mx-auto mb-8" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
          Revival Nation Presents
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 text-5xl font-black leading-tight md:text-8xl">
          REVIVAL FIRE
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-6 text-lg text-gray-200 md:text-xl">
          “But His word was in my heart as a burning fire...”
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-2 text-amber-400">
          Jeremiah 20:9
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/register" className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black transition hover:bg-amber-400">
            Register Now
          </Link>
          <a href="#about" className="rounded-full border border-white/80 px-8 py-4 transition hover:bg-white hover:text-black">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}