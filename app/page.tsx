import MainLayout from "@/components/layout/MainLayout";

import Hero from "@/components/sections/Hero";
import MinistryPillars from "@/components/sections/MinistryPillars";
import About from "@/components/sections/About";
import WeeklySchedule from "@/components/sections/WeeklySchedule";
import GatheringRecap from "@/components/sections/GatheringRecap";
import TestimoniesSection from "@/components/sections/TestimoniesSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import PrayerSection from "@/components/sections/PrayerSection";
import FinalCta from "@/components/sections/FinalCta";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <MinistryPillars />
      <About />
      <WeeklySchedule />
      <GatheringRecap />
      <TestimoniesSection />
      <GalleryPreview />
      <PrayerSection />
      <FinalCta />
      <NewsletterSection />
    </MainLayout>
  );
}