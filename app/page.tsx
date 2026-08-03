import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Footer />
    </>
  );
}