import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Clock, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-4 sm:px-6 py-20 md:py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionTitle
            title="Contact Us"
            subtitle="Get in touch with Revival Nation Ministry. We are here to answer your questions, stand with you in prayer, and welcome you to our upcoming events."
          />

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Ministry Contact Info (Left Column - 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border border-white/10 bg-zinc-900/80 backdrop-blur-sm text-white">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                    <Flame className="h-5 w-5 text-amber-500 fill-amber-500" />
                    Ministry Information
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Revival Nation exists to see lives transformed through the power of prayer, worship, and the Word of God. Reach out to us for general inquiries, prayer requests, or partnership.
                  </p>

                  <div className="space-y-4 text-sm">
                    {/* Official Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Official Email</h4>
                        <a
                          href="mailto:revivalnation40@gmail.com"
                          className="text-amber-400 hover:underline font-medium break-all"
                        >
                          revivalnation40@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Venue / Location */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Event Venue</h4>
                        <p className="text-gray-400">
                          RCCG Calvary Parish Car Park, Itire, Surulere, Lagos, Nigeria
                        </p>
                      </div>
                    </div>

                    {/* Next Event Date */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Revival Fire 2026</h4>
                        <p className="text-gray-400">
                          Saturday, 15 August 2026 — 3:00 PM Prompt
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Extra Encouragement Card */}
              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-900/90 to-zinc-900/80 p-6 text-center">
                <h4 className="font-bold text-amber-400 text-base">Need Prayer?</h4>
                <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                  Our ministry team is standing by to pray with you. Send us your request using the contact form or visit our dedicated Prayer page.
                </p>
              </div>
            </div>

            {/* Contact Form (Right Column - 7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
