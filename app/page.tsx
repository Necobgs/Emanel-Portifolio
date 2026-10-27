import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { StackSection } from "@/components/sections/stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CasesSection } from "@/components/sections/cases-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#06080F] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors duration-200">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <StackSection />
        <ExperienceSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
