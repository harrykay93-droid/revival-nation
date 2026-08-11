import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import PrayerForm from "@/components/ui/PrayerForm";

export default function PrayerPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl space-y-10">
          <SectionTitle title="Prayer Request" subtitle="Bring your concerns to the Lord and let this community stand with you in faith." />
          <PrayerForm />
        </div>
      </section>
    </MainLayout>
  );
}