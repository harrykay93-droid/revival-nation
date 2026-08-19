import MainLayout from "@/components/layout/MainLayout";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Clock, Flame, Calendar, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact & Inquiries | Revival Nation",
  description: "Connect with Revival Nation ministry for general inquiries, prayer requests, partnership, or booking ministers.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.18),_transparent_40%),linear-gradient(135deg,_#020617,_#111827)] px-4 sm:px-6 py-20 md:py-24 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionTitle
            title="Connect With Us"
            subtitle="Reach out to Revival Nation Ministry. We are here to answer your questions, stand with you in prayer, and partner for the Gospel."
          />

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Ministry Contact Info (Left Column - 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border border-white/10 bg-zinc-900/80 backdrop-blur-sm text-white">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                    <Flame className="h-5 w-5 text-amber-500 fill-amber-500" />
                    Ministry Headquarters
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Revival Nation exists to see lives transformed through the power of prayer, worship, and the Word of God. Reach out to us for ministerial invitations, prayer, or partnership.
                  </p>

                  <div className="space-y-4 text-sm">
                    {/* WhatsApp Direct */}
                    <div className="flex items-start gap-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 transition hover:border-emerald-500/60 hover:bg-emerald-500/15">
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/20 p-2 text-emerald-400 shrink-0">
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.524zm6.204-3.848l.37.22c1.472.873 3.164 1.333 4.887 1.334 5.228 0 9.48-4.251 9.483-9.482.002-2.536-.987-4.92-2.784-6.718-1.797-1.797-4.181-2.786-6.721-2.787-5.228 0-9.48 4.252-9.483 9.482-.001 1.77.478 3.5 1.385 5.006l.241.398-.999 3.649 3.738-.981zm11.39-7.795c-.097-.161-.355-.257-.741-.451-.387-.193-2.288-1.129-2.643-1.258-.354-.129-.612-.193-.87.193s-.998 1.258-1.224 1.516c-.225.258-.451.29-.838.097-.387-.194-1.633-.602-3.11-1.92-1.149-1.025-1.926-2.29-2.152-2.677-.225-.387-.024-.596.17-.789.175-.174.387-.451.58-.677.194-.226.258-.387.387-.645.129-.258.064-.484-.032-.677-.097-.194-.87-2.097-1.192-2.871-.314-.755-.632-.653-.87-.665l-.741-.013c-.258 0-.677.097-1.031.484-.355.387-1.354 1.322-1.354 3.226s1.387 3.742 1.58 4.001c.193.258 2.73 4.168 6.613 5.845.924.399 1.645.638 2.207.817.928.295 1.772.253 2.44.153.744-.112 2.288-.936 2.611-1.839.322-.903.322-1.677.225-1.839z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-emerald-300">WhatsApp Direct</h4>
                        <p className="text-xs text-gray-300 mb-2">Instant response & direct prayer connection</p>
                        <a
                          href={siteConfig.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-black transition hover:bg-emerald-400 active:scale-95"
                        >
                          <span>Chat on WhatsApp</span>
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>

                    {/* Instagram Direct */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-pink-500/30 bg-pink-500/10 p-2.5 text-pink-400 shrink-0">
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Instagram Profile</h4>
                        <a
                          href={siteConfig.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:underline font-medium break-all"
                        >
                          @revivalnation8
                        </a>
                      </div>
                    </div>

                    {/* Official Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Official Email</h4>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-amber-400 hover:underline font-medium break-all"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* Central Location */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Meeting Ground</h4>
                        <p className="text-gray-400">
                          {siteConfig.contact.address}
                        </p>
                      </div>
                    </div>

                    {/* Regular Schedule */}
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2.5 text-amber-400 shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-200">Online Intercessory Altar</h4>
                        <p className="text-gray-400">
                          Every Monday — 9:00 PM (WAT)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Extra Encouragement Card */}
              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-900/90 to-zinc-900/80 p-6 text-center space-y-3">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-amber-400 text-base">Need Prayer or Counsel?</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our intercessors stand ready to pray with you. Send a message here or visit our dedicated Prayer page.
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
