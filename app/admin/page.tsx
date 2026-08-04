import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { listContactMessages, listRegistrations } from "@/lib/event-service";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const registrations = await listRegistrations();
  const contactMessages = await listContactMessages();

  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Admin Dashboard" subtitle="Monitor registrations, follow-up requests, and guest check-in." />
          <AdminDashboard registrations={registrations} contactMessages={contactMessages} />
        </div>
      </section>
    </MainLayout>
  );
}
