import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import EventCard from "@/components/ui/EventCard";
import { siteConfig } from "@/lib/site";

const eventDetails = [
  {
    title: "Theme",
    description: "A season of spiritual awakening and divine encounter.",
    detail: siteConfig.event.scripture,
  },
  {
    title: "Date & Time",
    description: "Saturday, 15 August 2026",
    detail: "3:00 PM prompt",
  },
  {
    title: "Venue",
    description: siteConfig.event.venue,
    detail: siteConfig.event.city,
  },
];

export default function EventsPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Revival Fire 2026" subtitle="A gathering for worship, prayer, and kingdom impact." />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {eventDetails.map((item) => (
              <EventCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-zinc-900/70 p-10">
            <h3 className="text-2xl font-semibold text-amber-400">Speakers & Program</h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              The program will feature prayer, prophetic ministry, Scripture exposition, worship, and practical encouragement for every believer.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}