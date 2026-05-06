import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import DarkSection from "./components/DarkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <StatsSection />
      <FeaturesSection />
      <DarkSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
