import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyRapidX from "@/components/WhyRapidX";
import ProductShowcase from "@/components/ProductShowcase";
import UseCaseTabs from "@/components/UseCaseTabs";
import HowItWorks from "@/components/HowItWorks";
import SecuritySection from "@/components/SecuritySection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Integrations from "@/components/Integrations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060010] text-white selection:bg-[#7C3AED] selection:text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyRapidX />
      <ProductShowcase />
      <UseCaseTabs />
      <HowItWorks />
      <SecuritySection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Integrations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
