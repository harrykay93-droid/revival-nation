import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import AlbumViewClient from "@/components/ui/AlbumViewClient";
import { getGalleryAlbum, getGalleryAlbums } from "@/lib/gallery";
import { ArrowLeft } from "lucide-react";

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
        <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <SectionTitle title="Album Not Found" subtitle="The gallery album you requested could not be found." />
            <Link href="/gallery">
              <Button variant="outline" className="inline-flex items-center gap-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black">
                <ArrowLeft size={18} /> Return to Gallery
              </Button>
            </Link>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <AlbumViewClient album={album} />
        </div>
      </section>
    </MainLayout>
  );
}
