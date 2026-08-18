"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, HeartHandshake, Sparkles } from "lucide-react";
import { navigation } from "@/lib/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#020617]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-500/40 bg-zinc-900 p-0.5 shadow-md shadow-amber-500/10 transition-transform group-hover:scale-105">
            <Image
              src="/images/revival-logo.png"
              alt="Revival Nation Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              REVIVAL NATION
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/80 -mt-1 hidden sm:block">
              MINISTRY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-1 py-0.5"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/prayer"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-300 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black"
          >
            <Sparkles className="h-3.5 w-3.5" />
            PRAYER
          </Link>
          <Link
            href="/give"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2 text-xs font-bold text-black shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.03] hover:bg-amber-300 active:scale-[0.98]"
          >
            <HeartHandshake className="h-3.5 w-3.5" />
            PARTNER & GIVE
          </Link>
        </div>

        {/* Mobile menu trigger button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5 text-amber-400" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div className="border-t border-white/10 bg-[#020617]/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center py-2 text-base font-semibold text-gray-200 transition hover:text-amber-400 active:text-amber-400"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/prayer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 py-3 text-center text-sm font-bold text-amber-400 transition"
                onClick={() => setOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                NEED PRAYER?
              </Link>
              <Link
                href="/give"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-center text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition active:scale-[0.98]"
                onClick={() => setOpen(false)}
              >
                <HeartHandshake className="h-4 w-4" />
                PARTNER & GIVE
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}