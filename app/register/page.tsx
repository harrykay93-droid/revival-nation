import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import RegistrationForm from "@/components/ui/RegistrationForm";

export default function RegisterPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Register for Revival Fire 2026" subtitle="Reserve your place and let us prepare a warm welcome for you." />
          <RegistrationForm />
        </div>
      </section>
    </MainLayout>
  );
}