import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { StackSection } from "@/components/sections/stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CasesSection } from "@/components/sections/cases-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f1f3f7] selection:bg-emerald-500/25 selection:text-emerald-300">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <StackSection />
        <ExperienceSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
