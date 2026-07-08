import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PaneReveal from "@/components/PaneReveal";
import ProjectsSection from "@/components/ProjectsSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import HomeQuote from "@/components/HomeQuote";

export default function Home() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <ProcessSection />
      <PaneReveal />
      <div id="projects">
        <ProjectsSection />
      </div>
      <WhyUsSection />
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection />
      <HomeQuote />
    </main>
  );
}
