import HeroSection from "./components/Hero";
import NextSection from "./components/NextSection";
import AboutUsSection from "./components/AboutUsSection";
import OurProcess from "./components/OurProcess";
import { PortfolioShowcase } from "./components/ProjectsSection";
import CallToActionSection from "./components/CallToActionSection";
import ContactSection from "./components/ContactUs";
import { WhatWeOfferSection } from "./components/OurServices";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOfferSection />
      <OurProcess />

      <PortfolioShowcase />
      <CallToActionSection />
      <ContactSection />
    </>
  );
}