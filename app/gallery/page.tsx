import MainLayout from "@/components/layout/MainLayout";
import GalleryGrid from "@/components/ui/GalleryGrid";
import SectionTitle from "@/components/ui/SectionTitle";

const galleryItems = [
  {
    title: "September 2025 Revival Hour",
    description: "A time of Prayers and Encounter, prayer, and unity.",
    src: "/images/hero-bg.jpg.jpg",
  },
  {
    title: "Prayer Gathering",
    description: "A faithful community gathering in expectation.",
    src: "/images/about.jpg.png",
  },
  {
    title: "Outreach Moment",
    description: "Moments of love, compassion, and kingdom impact.",
    src: "/images/revival-logo.png.png",
  },
  {
    title: "Community Service",
    description: "Serving and loving the people around us.",
    src: "/images/hero-bg.jpg.jpg",
  },
  {
    title: "Ministry Encounter",
    description: "A memorable encounter with God’s presence.",
    src: "/images/about.jpg.png",
  },
  {
    title: "Future Revival",
    description: "The vision of a multiplying movement of faith.",
    src: "/images/revival-logo.png.png",
  },
];

export default function GalleryPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Gallery" subtitle="A curated snapshot of our shared journey and ministry moments." />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </MainLayout>
  );
}