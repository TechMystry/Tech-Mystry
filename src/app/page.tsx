import HeroSection from "./components/Hero";
import { ProcessSection } from "./components/HowItWorksSection";
import { PortfolioShowcase } from "./components/ProjectsSection";
import CallToActionSection from "./components/CallToActionSection";
import ContactSection from "./components/ContactUs";
import { WhatWeOfferSection } from "./components/OurServices";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOfferSection />
      <ProcessSection />
      <PortfolioShowcase />
      <CallToActionSection />
      <ContactSection />
    </>
  );
}