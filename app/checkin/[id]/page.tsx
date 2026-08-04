import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import CheckInPage from "@/components/admin/CheckInPage";
import { listRegistrations } from "@/lib/event-service";

export const dynamic = "force-dynamic";

export default async function CheckInRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const registrations = await listRegistrations();
  const registration = registrations.find((entry) => entry.id === id);

  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <SectionTitle title="Guest Check-in" subtitle="Use the secure QR check-in flow for Revival Fire 2026." />
          <CheckInPage registration={registration} />
        </div>
      </section>
    </MainLayout>
  );
}
