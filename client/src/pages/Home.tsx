import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Writing from "@/components/Writing";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_85)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Writing />
        <Services />
        <Connect />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
