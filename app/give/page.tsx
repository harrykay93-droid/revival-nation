import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import GivingClient from "@/components/ui/GivingClient";

export default function GivePage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-12">
          <SectionTitle
            title="Partner & Give"
            subtitle="Partner with Revival Nation to spread the gospel, host transformative gatherings, and empower our community."
          />
          <GivingClient />
        </div>
      </section>
    </MainLayout>
  );
}