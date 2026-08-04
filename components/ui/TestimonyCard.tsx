import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TestimonyCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonyCard({ name, role, quote }: TestimonyCardProps) {
  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-white">{name}</CardTitle>
        <p className="text-sm text-amber-400">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-gray-300">“{quote}”</p>
      </CardContent>
    </Card>
  );
}
