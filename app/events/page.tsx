import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/site";
import { Calendar, Clock, MapPin, Sparkles, Flame, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gatherings & Events | Revival Nation",
  description: "Explore upcoming prayer watches, revival hours, and past landmark conferences hosted by Revival Nation.",
};

const recurringEvents = [
  {
    title: "Online Intercessory Altar",
    schedule: "Every Tuesday & Thursday — 8:00 PM (WAT)",
    location: "Online (Virtual Altar)",
    description: "A focused space of passionate prayer, spiritual warfare, and seeking the Lord for souls and revival.",
    tag: "Weekly",
  },
  {
    title: "Monthly Revival Hour",
    schedule: "Last Saturday of Each Month — 4:00 PM",
    location: "RCCG Calvary Parish Grounds / Stream",
    description: "A dedicated sacred service characterized by deep worship, prophetic teaching, and ministry to the sick and weary.",
    tag: "Monthly",
  },
  {
    title: "Youth & Campus Fellowship",
    schedule: "2nd & 4th Sunday — 5:00 PM",
    location: "Ministry Center",
    description: "Equipping young people, students, and young professionals to lead consecrated lives of impact.",
    tag: "Bi-Weekly",
  },
];

const pastConferences = [
  {
    title: "Revival Fire 2026",
    theme: "“His Word as a Burning Fire”",
    scripture: "Jeremiah 20:9",
    date: "15 August 2026",
    venue: "RCCG Calvary Parish Car Park, Itire, Surulere, Lagos",
    description:
      "A landmark gathering uniting believers across generations for hours of fervent prayer, repentance, worship, and spiritual renewal. Hundreds were reignited and commissioned.",
    highlights: ["Spontaneous worship & prayer", "Prophetic impartation", "Lives healed & transformed"],
    gallerySlug: "/gallery",
  },
  {
    title: "YOU_CAN 2025",
    theme: "Faith & Kingdom Dominion",
    scripture: "Philippians 4:13",
    date: "May 2025",
    venue: "Lagos, Nigeria",
    description:
      "A youth and young adult empowerment convention focused on breaking limitations through the power of the Holy Spirit.",
    highlights: ["Youth empowerment", "Spiritual breakthrough", "Vibrant community worship"],
    gallerySlug: "/gallery/may-2025-you-can",
  },
];

export default function EventsPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-4 sm:px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-20">
          <SectionTitle
            title="Gatherings & Sacred Assemblies"
            subtitle="Discover the rhythm of our regular fellowship and reflect on landmark revival conferences."
          />

          {/* Section 1: Recurring Weekly & Monthly Meetings */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Regular Gathering Schedule</h2>
                <p className="text-xs text-gray-400">Join us in prayer and fellowship throughout the month</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {recurringEvents.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-zinc-900 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold text-amber-400">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                    <div className="mt-3 space-y-1.5 text-xs text-amber-200/90">
                      <p className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>{item.schedule}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-300">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                    >
                      <span>Inquire / Get Link</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Landmark Conferences & Past Gatherings */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Landmark Conferences & Impact Archive</h2>
                <p className="text-xs text-gray-400">Past moves of God and sacred milestones</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {pastConferences.map((conf) => (
                <div
                  key={conf.title}
                  className="group relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 shadow-xl backdrop-blur-md transition-all hover:border-amber-500/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-amber-300">
                      Concluded Assembly
                    </span>
                    <span className="text-xs font-bold text-gray-400">{conf.date}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-white">{conf.title}</h3>
                  <p className="text-sm font-semibold text-amber-400">
                    Theme: {conf.theme} ({conf.scripture})
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-gray-300">
                    {conf.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Key Highlights:
                    </p>
                    {conf.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={conf.gallerySlug}
                      className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition"
                    >
                      <span>View Photos & Moments</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Host or Partner Card */}
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-zinc-900/90 via-black to-zinc-900/90 p-8 sm:p-12 text-center shadow-2xl space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Host Revival Nation at Your Church or Campus
            </h3>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed">
              Our ministry team travels to churches, youth assemblies, conferences, and campuses to minister the Word of God and lead times of prayer and revival.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-3.5 text-sm font-bold text-black shadow-lg shadow-amber-500/20 transition hover:scale-105 hover:bg-amber-300"
              >
                INVITE MINISTRY TEAM
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}