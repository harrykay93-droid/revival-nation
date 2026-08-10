import MainLayout from "@/components/layout/MainLayout";
import GalleryGrid from "@/components/ui/GalleryGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { getGalleryItems } from "@/lib/gallery";

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

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