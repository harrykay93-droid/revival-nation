import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  "Faith in God’s Word",
  "Prayerful dependence",
  "Compassionate service",
  "Holiness and integrity",
];

const leaders = [
  { name: "Pastor Akin Adesina", role: "Founding Director" },
  { name: "Minister Sarah Adesina", role: "Ministry Coordinator" },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionTitle title="About Revival Nation" subtitle="A ministry called to awaken souls, strengthen faith, and prepare a generation for God’s move." />

          <div className="grid gap-10 lg:grid-cols-2">
            <Card className="border border-white/10 bg-zinc-900/80">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>Revival Nation exists to see lives transformed through the power of prayer, the Word of God, and genuine fellowship.</p>
                <p>We believe the Lord is raising a people who will stand in holiness, worship with passion, and carry the fire of revival into every sphere of life.</p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-zinc-900/80">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Vision & Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p><span className="font-semibold text-white">Vision:</span> To ignite a global wave of revival through prayer, worship, teaching, and compassionate outreach.</p>
                <p><span className="font-semibold text-white">Mission:</span> To equip believers, restore hope, and advance the kingdom of God in every generation.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-white/10 bg-zinc-900/80">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {values.map((value) => (
                  <div key={value} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-gray-300">
                    {value}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border border-white/10 bg-zinc-900/80">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                {leaders.map((leader) => (
                  <div key={leader.name}>
                    <p className="font-semibold text-white">{leader.name}</p>
                    <p>{leader.role}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-zinc-900/80">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Theme Scripture</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="text-lg">“But his word was in mine heart as a burning fire...”</p>
                <p className="mt-2 font-semibold text-amber-400">Jeremiah 20:9</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}