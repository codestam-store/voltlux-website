import { CartoonNavbar } from "@/components/cartoon-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CharactersSection } from "@/components/sections/characters-section";
import { AdventuresSection } from "@/components/sections/adventures-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <CartoonNavbar />
      <div className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <CharactersSection />
        <AdventuresSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </main>
  );
}