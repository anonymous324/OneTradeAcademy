import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import EducationSection from "@/components/landing/EducationSection";
import CommunitySection from "@/components/landing/CommunitySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>One Trade Academy | Trading Education for Indian Markets</title>
        <meta
          name="description"
          content="Join One Trade Academy for disciplined trading insights on NIFTY, BANKNIFTY & Equity. Research-based market analysis and trading education community."
        />
        <meta
          name="keywords"
          content="trading education, NIFTY trading, BANKNIFTY analysis, stock market learning, Indian markets, trading community"
        />
        <link rel="canonical" href="https://onetradeacademy.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ProcessSection />
          <ServicesSection />
          <EducationSection />
          <CommunitySection />
          <TestimonialsSection />
          <HowItWorksSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;