import HeroSection from "./components/Hero";
import NextSection from "./components/NextSection";
import AboutUsSection from "./components/AboutUsSection";
import TabbedServices from "./components/OurServices";
import OurProcess from "./components/OurProcess";
import ProjectsSection from "./components/ProjectsSection";
import CallToActionSection from "./components/CallToActionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NextSection />
      <AboutUsSection />
      <TabbedServices />
      <OurProcess />
      <ProjectsSection />
      <CallToActionSection />
    </>
  );
}
