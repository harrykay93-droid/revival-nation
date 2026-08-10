import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
  href: string;
  slug: string;
};

export type GalleryAlbum = {
  title: string;
  description: string;
  slug: string;
  images: string[];
};

const galleryRoot = path.join(process.cwd(), "public", "images", "gallery");
const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function formatAlbumName(folderName: string) {
  return folderName.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function getAlbumSlug(folderName: string) {
  return folderName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

async function loadAlbums() {
  const entries = await fs.readdir(galleryRoot, { withFileTypes: true });
  const albumFolders = entries
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  return Promise.all(
    albumFolders.map(async (entry) => {
      const albumPath = path.join(galleryRoot, entry.name);
      const files = await fs.readdir(albumPath);
      const imageFiles = files
        .filter((file) => supportedImageExtensions.has(path.extname(file).toLowerCase()))
        .sort((a, b) => a.localeCompare(b));

      if (!imageFiles.length) {
        return null;
      }

      const title = formatAlbumName(entry.name);
      const slug = getAlbumSlug(entry.name);
      const albumBase = `/images/gallery/${entry.name}`;
      const images = imageFiles.map((file) => `${albumBase}/${encodeURIComponent(file)}`);

      return {
        title,
        description: `${imageFiles.length} photo${imageFiles.length === 1 ? "" : "s"} from ${title}`,
        slug,
        href: `/gallery/${slug}`,
        src: images[0],
        images,
      };
    })
  );
}

export const getGalleryAlbums = cache(async (): Promise<GalleryAlbum[]> => {
  try {
    const albums = (await loadAlbums()).filter(
      (album): album is GalleryItem & GalleryAlbum => Boolean(album)
    );

    return albums.map(({ title, description, slug, images }) => ({
      title,
      description,
      slug,
      images,
    }));
  } catch {
    return [];
  }
});

export const getGalleryItems = cache(async (): Promise<GalleryItem[]> => {
  try {
    const albums = (await loadAlbums()).filter(
      (album): album is GalleryItem & GalleryAlbum => Boolean(album)
    );

    const galleryItems = albums.map(({ title, description, slug, href, src }) => ({
      title,
      description,
      slug,
      href,
      src,
    }));

    if (galleryItems.length > 0) {
      return galleryItems;
    }
  } catch {
    // Fall back to the existing placeholder images if no gallery folders are present yet.
  }

  const fallbackAlbums: GalleryItem[] = [
    {
      title: "September 2025 Revival Hour",
      description: "A time of prayer, worship, and divine encounter.",
      src: "/images/hero-bg.jpg",
      href: "/gallery",
      slug: "default",
    },
    {
      title: "Prayer Gathering",
      description: "A faithful community gathering in expectation.",
      src: "/images/about.png",
      href: "/gallery",
      slug: "default",
    },
    {
      title: "Outreach Moment",
      description: "Moments of love, compassion, and kingdom impact.",
      src: "/images/revival-logo.png",
      href: "/gallery",
      slug: "default",
    },
  ];

  return fallbackAlbums;
});

export const getGalleryAlbum = cache(async (albumSlug: string): Promise<GalleryAlbum | null> => {
  try {
    const albums = await getGalleryAlbums();
    return albums.find((album) => album.slug === albumSlug) ?? null;
  } catch {
    return null;
  }
});
