import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Images } from "lucide-react";

export type GalleryItemProps = {
  title: string;
  description: string;
  src: string;
  href?: string;
  slug?: string;
};

type GalleryGridProps = {
  items: GalleryItemProps[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const targetHref = item.href || (item.slug ? `/gallery/${item.slug}` : "/gallery");

        return (
          <Link key={item.title} href={targetHref} className="group block">
            <Card className="h-full overflow-hidden border border-white/10 bg-zinc-900/80 p-0 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-amber-500/50 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
              <div className="relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                  <Images size={14} /> View Collection
                </div>
              </div>

              <CardContent className="flex flex-col justify-between space-y-3 p-6">
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-amber-400">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:underline pt-2">
                  <span>Explore Album Pictures</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
