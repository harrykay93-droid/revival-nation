import MainLayout from "@/components/layout/MainLayout";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";
import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const contactDetails = [
  { icon: <MapPin size={18} />, label: "Address", value: "RCCG Calvary Parish, Itire, Surulere, Lagos" },
  { icon: <Mail size={18} />, label: "Email", value: "revivalnation40@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone", value: "+234 704 713 9011" },
];

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Contact Us" subtitle="We would love to hear from you and walk with you in prayer." />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 py-3">
                    <div className="mt-1 text-amber-400">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8">
                <h3 className="text-xl font-semibold text-amber-400">Follow us</h3>
                <div className="mt-4 flex gap-4">
                  <a href="#" aria-label="Website" className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-amber-500 hover:text-black"><Globe size={18} /></a>
                  <a href="#" aria-label="Prayer chat" className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-amber-500 hover:text-black"><MessageCircle size={18} /></a>
                  <a href="#" aria-label="Send message" className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-amber-500 hover:text-black"><Send size={18} /></a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}