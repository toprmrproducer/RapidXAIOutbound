import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import DemoChat from "@/components/DemoChat";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6F7] relative selection:bg-violet-500/20 overflow-x-hidden bg-noise">
      <Navbar />

      <Hero />
      <Metrics />

      <Comparison />
      <Services />

      <HowItWorks />

      <DemoChat />

      <Pricing />

      <Benefits />

      <FAQ />
      <CTA />

      <Footer />
    </main>
  );
}
