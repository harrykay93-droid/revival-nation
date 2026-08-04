import SectionTitle from "@/components/ui/SectionTitle";

export default function Event() {
  return (
    <section id="schedule" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Revival Fire 2026"
          subtitle="Come expecting a life-changing encounter with GOD."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold text-red-500">
              Date
            </h3>

            <p className="mt-4">
              Saturday
            </p>

            <p>
              15 August 2026
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold text-red-500">
              Time
            </h3>

            <p className="mt-4">
              3:00 PM
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-8">
            <h3 className="text-2xl font-bold text-red-500">
              Venue
            </h3>

            <p className="mt-4">
              RCCG Calvary Parish Car Park
            </p>

            <p>
              Itire, Surulere, Lagos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}