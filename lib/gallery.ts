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

const albumMetadata: Record<
  string,
  { title: string; description: string; order: number; cover?: string }
> = {
  "revival-fire-2026": {
    title: "Revival Fire 2026",
    description: "Landmark Assembly at RCCG Calvary Parish, Itire, Lagos.",
    order: 1,
    cover: "revival-fire-01.jpg",
  },
  "revival-hour-july-2026": {
    title: "Revival Hour — July 2026",
    description: "Monthly Revival Hour of deep worship, communion, and fervent prayer.",
    order: 2,
    cover: "revival-hour-july-01.jpg",
  },
  "revival-hour-sept-2025": {
    title: "Revival Hour — September 2025",
    description: "Intense prayer, praise, and community spiritual encounter.",
    order: 3,
    cover: "1.jpg",
  },
  "may-2025-you-can": {
    title: "YOU_CAN 2025",
    description: "May 2025 Youth & Young Adults Empowerment Convention.",
    order: 4,
  },
  "may-2025-you_can": {
    title: "YOU_CAN 2025",
    description: "May 2025 Youth & Young Adults Empowerment Convention.",
    order: 4,
  },
};

function formatAlbumName(folderName: string) {
  const clean = folderName.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return clean
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function getAlbumSlug(folderName: string) {
  return folderName.toLowerCase().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function normalizeSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function loadAlbums() {
  const entries = await fs.readdir(galleryRoot, { withFileTypes: true });
  const albumFolders = entries.filter((entry) => entry.isDirectory());

  const albums = await Promise.all(
    albumFolders.map(async (entry) => {
      const albumPath = path.join(galleryRoot, entry.name);
      const files = await fs.readdir(albumPath);
      const imageFiles = files
        .filter((file) => supportedImageExtensions.has(path.extname(file).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

      if (!imageFiles.length) {
        return null;
      }

      const slug = getAlbumSlug(entry.name);
      const meta = albumMetadata[slug] || albumMetadata[entry.name.toLowerCase()];
      const title = meta?.title ?? formatAlbumName(entry.name);
      const description =
        meta?.description ??
        `${imageFiles.length} photo${imageFiles.length === 1 ? "" : "s"} from ${title}`;
      const albumBase = `/images/gallery/${entry.name}`;
      const images = imageFiles.map((file) => `${albumBase}/${file}`);

      const coverFile = meta?.cover && imageFiles.includes(meta.cover) ? meta.cover : imageFiles[0];
      const src = `${albumBase}/${coverFile}`;
      const order = meta?.order ?? 99;

      return {
        title,
        description,
        slug,
        href: `/gallery/${slug}`,
        src,
        images,
        order,
      };
    })
  );

  return albums
    .filter((album): album is NonNullable<typeof album> => Boolean(album))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export const getGalleryAlbums = cache(async (): Promise<GalleryAlbum[]> => {
  try {
    const albums = await loadAlbums();
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
    const albums = await loadAlbums();
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
    // Fall back to default images if gallery folder fails
  }

  const fallbackAlbums: GalleryItem[] = [
    {
      title: "Revival Fire 2026",
      description: "Landmark Assembly at RCCG Calvary Parish, Itire, Lagos.",
      src: "/images/gallery/revival-fire-2026/revival-fire-01.jpg",
      href: "/gallery/revival-fire-2026",
      slug: "revival-fire-2026",
    },
    {
      title: "Revival Hour — July 2026",
      description: "Monthly Revival Hour of deep worship, communion, and fervent prayer.",
      src: "/images/gallery/revival-hour-july-2026/revival-hour-july-01.jpg",
      href: "/gallery/revival-hour-july-2026",
      slug: "revival-hour-july-2026",
    },
    {
      title: "Revival Hour — September 2025",
      description: "Intense prayer, praise, and community spiritual encounter.",
      src: "/images/gallery/revival-hour-sept-2025/1.jpg",
      href: "/gallery/revival-hour-sept-2025",
      slug: "revival-hour-sept-2025",
    },
    {
      title: "YOU_CAN 2025",
      description: "May 2025 Youth & Young Adults Empowerment Convention.",
      src: "/images/gallery/may-2025-you_can/IMG_2169.jpg",
      href: "/gallery/may-2025-you-can",
      slug: "may-2025-you-can",
    },
  ];

  return fallbackAlbums;
});

export const getGalleryAlbum = cache(async (albumSlug: string): Promise<GalleryAlbum | null> => {
  try {
    const normalizedRequestedSlug = normalizeSlug(albumSlug);
    const albums = await getGalleryAlbums();
    return albums.find((album) => normalizeSlug(album.slug) === normalizedRequestedSlug) ?? null;
  } catch {
    return null;
  }
});

