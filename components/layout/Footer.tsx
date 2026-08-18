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
                  <p className="font-semibold text-gray-200">Online Intercessory Altar</p>
                  <p className="text-xs text-gray-400">Every Monday — 9:00 PM (WAT)</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-200">Monthly Revival Hour</p>
                  <p className="text-xs text-gray-400">Once Every Month</p>
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
            <div className="space-y-2.5">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.524zm6.204-3.848l.37.22c1.472.873 3.164 1.333 4.887 1.334 5.228 0 9.48-4.251 9.483-9.482.002-2.536-.987-4.92-2.784-6.718-1.797-1.797-4.181-2.786-6.721-2.787-5.228 0-9.48 4.252-9.483 9.482-.001 1.77.478 3.5 1.385 5.006l.241.398-.999 3.649 3.738-.981zm11.39-7.795c-.097-.161-.355-.257-.741-.451-.387-.193-2.288-1.129-2.643-1.258-.354-.129-.612-.193-.87.193s-.998 1.258-1.224 1.516c-.225.258-.451.29-.838.097-.387-.194-1.633-.602-3.11-1.92-1.149-1.025-1.926-2.29-2.152-2.677-.225-.387-.024-.596.17-.789.175-.174.387-.451.58-.677.194-.226.258-.387.387-.645.129-.258.064-.484-.032-.677-.097-.194-.87-2.097-1.192-2.871-.314-.755-.632-.653-.87-.665l-.741-.013c-.258 0-.677.097-1.031.484-.355.387-1.354 1.322-1.354 3.226s1.387 3.742 1.58 4.001c.193.258 2.73 4.168 6.613 5.845.924.399 1.645.638 2.207.817.928.295 1.772.253 2.44.153.744-.112 2.288-.936 2.611-1.839.322-.903.322-1.677.225-1.839z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-400">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
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