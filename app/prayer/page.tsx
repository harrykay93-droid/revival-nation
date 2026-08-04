import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";

export default function PrayerPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <SectionTitle title="Prayer Request" subtitle="Bring your concerns to the Lord and let this community stand with you in faith." />

          <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 shadow-2xl shadow-black/30">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm text-gray-300">
                  <span className="mb-2 block">Name</span>
                  <input className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
                </label>
                <label className="text-sm text-gray-300">
                  <span className="mb-2 block">Email (optional)</span>
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
                </label>
              </div>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 block">Prayer Request</span>
                <textarea rows={6} className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" required />
              </label>

              <Button className="w-full bg-amber-500 text-black hover:bg-amber-400">Submit Prayer Request</Button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}