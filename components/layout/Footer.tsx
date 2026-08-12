import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/navigation";
import { MapPin, Calendar, Clock } from "lucide-react";

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
              “Raising a generation that carries the fire of GOD.”
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Links
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

          {/* Event Details Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              REVIVAL FIRE 2026
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>15 August 2026</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>3:00 PM Prompt</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>RCCG Calvary Parish Car Park, Itire, Surulere, Lagos</span>
              </li>
            </ul>
          </div>

          {/* Call to Action Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Join the Movement
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Be part of what GOD is doing in this generation. Secure your place for Revival Fire 2026 today.
            </p>
            <Link
              href="/register"
              className="inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-center text-sm font-bold text-black shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 active:scale-[0.98]"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>© 2026 Revival Nation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}