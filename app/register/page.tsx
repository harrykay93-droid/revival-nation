import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import RegistrationForm from "@/components/ui/RegistrationForm";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Fellowship & Gathering Registration | Revival Nation",
  description: "Register for upcoming gatherings, conferences, and prayer watches hosted by Revival Nation.",
};

export default function RegisterPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-4 sm:px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl space-y-10">
          <SectionTitle
            title="Gathering & Fellowship Registration"
            subtitle="Register your interest for upcoming gatherings, prayer watches, and ministry events."
          />

          {/* Past Event Notice Banner */}
          <div className="rounded-2xl border border-amber-500/30 bg-black/60 p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Revival Fire 2026 Has Concluded</h4>
                <p className="text-xs text-gray-300">
                  Relive the moments and testimonies in our gallery, or register below for upcoming assemblies.
                </p>
              </div>
            </div>
            <Link
              href="/gallery"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-300 hover:bg-amber-500 hover:text-black transition"
            >
              <span>View Gallery</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <RegistrationForm />
        </div>
      </section>
    </MainLayout>
  );
}