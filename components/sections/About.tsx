import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <RevealSection id="about" className="bg-[#020617] py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="space-y-6">
          <SectionTitle
            title="ABOUT REVIVAL NATION"
            subtitle="Awakening souls, strengthening faith, and preparing a generation for GOD's move."
          />

          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            Revival Nation exists to see lives transformed through the power of prayer, the Word of GOD, and genuine fellowship.
          </p>

          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
            We believe the LORD is raising a people who will stand in holiness, worship with passion, and carry the fire of revival into every sphere of life. Our vision is to ignite a global wave of revival through prayer, worship, teaching, and compassionate outreach.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-7 py-3.5 text-sm font-bold text-amber-400 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black active:scale-[0.98]"
            >
              LEARN MORE ABOUT REVIVAL NATION
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-red-600 opacity-20 blur-xl transition duration-500 group-hover:opacity-40" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
            <Image
              src="/images/about.png"
              alt="About Revival Nation"
              width={600}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}