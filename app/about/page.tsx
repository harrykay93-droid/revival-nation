import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  "Faith in God's Word",
  "Prayerful dependence",
  "Compassionate service",
  "Holiness and integrity",
];

const leaders = [
  {
    name: "Minister Adekunle Harrison",
    role: "Convener",
    photo: "/team/minister-adekunle-harrison.png",
  },
  {
    name: "Toluwalope Akinde",
    role: "Ministry Secretary",
    photo: "/team/toluwalope-akinde.png",
  },
  {
    name: "Dairo Joshua",
    role: "Executive Team",
    photo: "/team/dairo-joshua.png",
  },
  {
    name: "Ogunyinka Oluwafemi",
    role: "Executive Team",
    photo: "/team/ogunyinka-oluwafemi.jpg",
  },
  {
    name: "Omolara Lasisi",
    role: "Executive Team",
    photo: "/team/omolara-lasisi.png",
  },
];

function PhotoFrame({
  name,
  role,
  photo,
  size = "small",
}: {
  name: string;
  role: string;
  photo: string;
  size?: "small" | "large";
}) {
  return (
    <div
      className={`group text-center ${size === "large" ? "max-w-md" : "w-full"
        }`}
    >
      <div
        className={`relative mx-auto overflow-hidden rounded-3xl border border-amber-500/30 bg-zinc-900 shadow-2xl shadow-amber-500/10 ${size === "large"
          ? "h-[420px] w-[320px]"
          : "h-[300px] w-full max-w-[240px]"
          }`}
      >
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16">
          <h3 className="font-bold text-white text-lg">{name}</h3>
          <p className="mt-1 text-sm text-amber-400 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const convener = leaders[0];
  const secretary = leaders[1];
  const teamMembers = leaders.slice(2);

  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-16">
          <SectionTitle
            title="About Revival Nation"
            subtitle="A ministry called to awaken souls, strengthen faith, and prepare a generation for God's move."
          />

          {/* Story + Vision cards */}
          <div className="grid gap-10 lg:grid-cols-2">
            <Card className="border border-white/10 bg-zinc-900/80">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Revival Nation exists to see lives transformed through the power of prayer, the Word of God, and genuine fellowship.
                </p>
                <p>
                  We believe the Lord is raising a people who will stand in holiness, worship with passion, and carry the fire of revival into every sphere of life.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-zinc-900/80">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-400">Vision & Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Vision:</span> To ignite a global wave of revival through prayer, worship, teaching, and compassionate outreach.
                </p>
                <p>
                  <span className="font-semibold text-white">Mission:</span> To equip believers, restore hope, and advance the kingdom of God in every generation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
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

          {/* ── TEAM SECTION ── */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Meet the Team
              </h2>

              <p className="mt-2 text-gray-400">
                The dedicated servants behind Revival Nation Ministry.
              </p>

              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
            </div>

            {/* Convener */}
            <div className="flex justify-center">
              <div className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-900/90 to-zinc-900/80 px-12 py-10 shadow-2xl shadow-amber-500/10 backdrop-blur-sm">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-amber-500/5 blur-2xl" />
                <PhotoFrame
                  name={convener.name}
                  role={convener.role}
                  photo={convener.photo}
                  size="large"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Ministry Leadership
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Secretary & Executive Team */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              <PhotoFrame
                name={secretary.name}
                role={secretary.role}
                photo={secretary.photo}
                size="small"
              />
              {teamMembers.map((member) => (
                <PhotoFrame
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  size="small"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}