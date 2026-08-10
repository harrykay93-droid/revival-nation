import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <RevealSection id="about" className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <SectionTitle title="About Revival Fire" subtitle="A ministry built to awaken hearts and prepare a generation for kingdom impact." />

          <p className="text-lg leading-8 text-gray-300">
            Revival Fire is a gathering dedicated to awakening hearts through worship, prayer, and the preaching of God’s Word. Our prayer is that every attendee experiences salvation, healing, restoration, and spiritual renewal.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about" className="rounded-full border border-amber-500/40 px-6 py-3 text-sm font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black">
              Discover Our Story
            </Link>
            <Link href="/events" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
              View Event Details
            </Link>
          </div>
        </div>

        <div>
          <Image src="/images/about.png" alt="Revival" width={600} height={700} className="rounded-3xl border border-white/10 shadow-2xl shadow-black/40" />
        </div>
      </div>
    </RevealSection>
  );
}