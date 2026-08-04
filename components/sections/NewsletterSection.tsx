"use client";

import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/20 to-red-500/10 px-8 py-12 text-center">
        <h3 className="text-3xl font-semibold text-white">Stay connected with Revival Nation</h3>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Receive updates about Revival Fire 2026, prayer alerts, and ministry news.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <input className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none sm:min-w-80" placeholder="Enter your email" />
          <Button className="bg-amber-500 text-black hover:bg-amber-400">Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
