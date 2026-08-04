import MainLayout from "@/components/layout/MainLayout";

import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import About from "@/components/sections/About";
import Event from "@/components/sections/Event";
import PrayerSection from "@/components/sections/PrayerSection";
import TestimoniesSection from "@/components/sections/TestimoniesSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Countdown />
      <About />
      <Event />
      <PrayerSection />
      <TestimoniesSection />
      <GalleryPreview />
      <NewsletterSection />
    </MainLayout>
  );
}