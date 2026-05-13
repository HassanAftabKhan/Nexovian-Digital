import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   HOMEPAGE — Full conversion-optimized flow
   ============================================ */

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
