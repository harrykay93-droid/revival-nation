import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
};

const galleryRoot = path.join(process.cwd(), "public", "images", "gallery");
const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function formatAlbumName(folderName: string) {
  return folderName.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

export const getGalleryItems = cache(async (): Promise<GalleryItem[]> => {
  try {
    const entries = await fs.readdir(galleryRoot, { withFileTypes: true });
    const albumFolders = entries
      .filter((entry) => entry.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));

    const albums = await Promise.all(
      albumFolders.map(async (entry) => {
        const albumPath = path.join(galleryRoot, entry.name);
        const files = await fs.readdir(albumPath);
        const imageFiles = files
          .filter((file) => supportedImageExtensions.has(path.extname(file).toLowerCase()))
          .sort((a, b) => a.localeCompare(b));

        if (!imageFiles.length) {
          return null;
        }

        const coverImage = imageFiles[0];
        const title = formatAlbumName(entry.name);

        return {
          title,
          description: `${imageFiles.length} photo${imageFiles.length === 1 ? "" : "s"} from ${title}`,
          src: `/images/gallery/${entry.name}/${encodeURIComponent(coverImage)}`,
        } satisfies GalleryItem;
      })
    );

    const galleryItems = albums.filter((album): album is GalleryItem => Boolean(album));
    if (galleryItems.length > 0) {
      return galleryItems;
    }
  } catch {
    // Fall back to the existing placeholder images if no gallery folders are present yet.
  }

  return [
    {
      title: "September 2025 Revival Hour",
      description: "A time of prayer, worship, and divine encounter.",
      src: "/images/hero-bg.jpg",
    },
    {
      title: "Prayer Gathering",
      description: "A faithful community gathering in expectation.",
      src: "/images/about.png",
    },
    {
      title: "Outreach Moment",
      description: "Moments of love, compassion, and kingdom impact.",
      src: "/images/revival-logo.png",
    },
  ];
});
