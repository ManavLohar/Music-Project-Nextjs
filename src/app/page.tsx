import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialCardsSection from "@/components/TestimonialCardsSection";
import UpcommingWebinarsSection from "@/components/UpcommingWebinarsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUsSection />
      <TestimonialCardsSection />
      <UpcommingWebinarsSection />
      <InstructorSection />
      <Footer />
    </main>
  );
}
