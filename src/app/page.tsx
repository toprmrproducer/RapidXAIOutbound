import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import StatsBar from "@/components/StatsBar";
import WhyRapidX from "@/components/WhyRapidX";
import ProductShowcase from "@/components/ProductShowcase";
import UseCaseTabs from "@/components/UseCaseTabs";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FounderCallout from "@/components/FounderCallout";
import FAQ from "@/components/FAQ";
import Integrations from "@/components/Integrations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060010] text-white selection:bg-[#7C3AED] selection:text-white">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <StatsBar />
      <WhyRapidX />
      <ProductShowcase />
      <UseCaseTabs />
      <Testimonials />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <FounderCallout />
      <FAQ />
      <Integrations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
