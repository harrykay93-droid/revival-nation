import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type EventCardProps = {
  title: string;
  description: string;
  detail: string;
};

export default function EventCard({ title, description, detail }: EventCardProps) {
  return (
    <Card className="border border-white/10 bg-zinc-900/80">
      <CardHeader>
        <CardTitle className="text-xl text-amber-400">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-gray-300">
        <p>{description}</p>
        <p className="font-semibold text-white">{detail}</p>
      </CardContent>
    </Card>
  );
}
