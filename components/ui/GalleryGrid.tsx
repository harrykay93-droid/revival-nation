import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type GalleryItem = {
  title: string;
  description: string;
  src: string;
  href?: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href ?? item.src}
          target="_blank"
          rel="noreferrer"
          className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900/80 transition hover:-translate-y-1 hover:border-amber-400/40"
        >
          <Card className="overflow-hidden bg-transparent shadow-none">
            <Image
              src={item.src}
              alt={item.title}
              width={600}
              height={400}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <CardContent className="space-y-2 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-400">{item.description}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
