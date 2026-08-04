import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type GalleryItem = {
  title: string;
  description: string;
  src: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden border border-white/10 bg-zinc-900/80 p-0">
          <Image
            src={item.src}
            alt={item.title}
            width={600}
            height={400}
            className="h-56 w-full object-cover"
          />
          <CardContent className="space-y-2 p-6">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-6 text-gray-400">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
