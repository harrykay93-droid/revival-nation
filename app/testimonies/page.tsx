import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonyCard from "@/components/ui/TestimonyCard";

const testimonies = [
  {
    name: "Moses A.",
    role: "Attendee",
    quote: "I came with a heavy heart and left with a renewed sense of hope and purpose.",
  },
  {
    name: "Grace O.",
    role: "Volunteer",
    quote: "The atmosphere was filled with peace, prayer, and the tangible presence of God.",
  },
  {
    name: "Samuel T.",
    role: "Pastor",
    quote: "The message stirred my spirit and challenged me to walk closer with God.",
  },
  {
    name: "Joyce N.",
    role: "Youth Leader",
    quote: "My faith was strengthened and the fire of God was reignited in my heart.",
  },
];

export default function TestimoniesPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Testimonies" subtitle="Stories of divine encounter and kingdom impact from our community." />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonies.map((item) => (
              <TestimonyCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
