import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { getGalleryAlbum, getGalleryAlbums } from "@/lib/gallery";

export async function generateStaticParams() {
  const albums = await getGalleryAlbums();
  return albums.map((album) => ({ album: album.slug }));
}

export default async function GalleryAlbumPage({ params }: { params: Promise<{ album: string }> }) {
  const { album: albumSlug } = await params;
  const album = await getGalleryAlbum(albumSlug);

  if (!album) {
    return (
      <MainLayout>
        <section className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <SectionTitle title="Album not found" subtitle="The gallery album you requested does not exist." />
              <Link href="/gallery">
                <Button variant="ghost" size="sm">
                  ← Back to Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 space-y-4">
            <Link href="/gallery">
              <Button variant="ghost" size="sm">
                ← Back to Gallery
              </Button>
            </Link>
            <SectionTitle title={album.title} subtitle={album.description} />
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {album.images.map((image) => (
              <div key={image} className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80">
                <Image
                  src={image}
                  alt={album.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
