import HeroSection from "./components/Hero";
import NextSection from "./components/NextSection";
import AboutUsSection from "./components/AboutUsSection";
import TabbedServices from "./components/OurServices";
import OurProcess from "./components/OurProcess";
import ProjectsSection from "./components/ProjectsSection";
import CallToActionSection from "./components/CallToActionSection";
import ContactSection from "./components/ContactUs";
import ServiceStack from "./components/ServiceStack";
export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ServiceStack />
      <OurProcess />
      <ProjectsSection />
      <CallToActionSection />
      <ContactSection />
    </main>
  );
}
