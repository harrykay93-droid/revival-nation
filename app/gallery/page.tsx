import MainLayout from "@/components/layout/MainLayout";
import GalleryGrid from "@/components/ui/GalleryGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { getGalleryItems } from "@/lib/gallery";

export default async function GalleryPage() {
  const dynamicItems = await getGalleryItems();

  const galleryItems = dynamicItems.length > 0 ? dynamicItems : [
    {
      title: "Worship Night",
      description: "A sacred time of worship, prayer, and unity.",
      src: "/images/hero-bg.jpg",
      href: "/gallery",
      slug: "worship-night",
    },
    {
      title: "Prayer Gathering",
      description: "A faithful community gathering in expectation.",
      src: "/images/about.png",
      href: "/gallery",
      slug: "prayer-gathering",
    },
    {
      title: "Outreach Moment",
      description: "Moments of love, compassion, and kingdom impact.",
      src: "/images/revival-logo.png",
      href: "/gallery",
      slug: "outreach-moment",
    },
    {
      title: "Community Service",
      description: "Serving and loving the people around us.",
      src: "/images/hero-bg.jpg",
      href: "/gallery",
      slug: "community-service",
    },
    {
      title: "Ministry Encounter",
      description: "A memorable encounter with God’s presence.",
      src: "/images/about.png",
      href: "/gallery",
      slug: "ministry-encounter",
    },
    {
      title: "Future Revival",
      description: "The vision of a multiplying movement of faith.",
      src: "/images/revival-logo.png",
      href: "/gallery",
      slug: "future-revival",
    },
  ];

  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionTitle title="Gallery" subtitle="A curated snapshot of our shared journey and ministry moments." />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </MainLayout>
  );
}