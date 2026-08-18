import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/navigation";
import { MapPin, Mail, Clock, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-500/40 bg-zinc-900 p-0.5">
                <Image
                  src="/images/revival-logo.png"
                  alt="Revival Nation Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                REVIVAL NATION
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              “Raising a generation that carries the fire of GOD.” A ministry dedicated to awakening hearts, prevailing prayer, and kingdom impact.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/give"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
              >
                <Heart className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                Support the Mission
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gathering & Schedule Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Gathering Schedule
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-200">Online Prayer Altar</p>
                  <p className="text-xs text-gray-400">Every Tue & Thu — 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-200">Monthly Revival Hour</p>
                  <p className="text-xs text-gray-400">Last Saturday — 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-200">Central Fellowship</p>
                  <p className="text-xs text-gray-400">{siteConfig.contact.address}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Connect & Outreach Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Connect With Us
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Have questions, need prayer, or want to invite our ministry team? Reach out anytime.
            </p>
            <div className="flex items-center gap-2 text-sm text-amber-400">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline text-xs sm:text-sm break-all">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/prayer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2.5 text-center text-xs font-bold text-amber-300 shadow-md transition hover:bg-amber-500 hover:text-black"
              >
                SUBMIT PRAYER REQUEST
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Revival Nation Ministry. All Rights Reserved.</p>
          <p className="text-gray-400">Igniting hearts with the presence and power of God.</p>
        </div>
      </div>
    </footer>
  );
}