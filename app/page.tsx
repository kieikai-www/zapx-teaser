import { HeroSection } from "@/components/sections/HeroSection";
import { ProgressTimeline } from "@/components/sections/ProgressTimeline";
import { ZapxOverview } from "@/components/sections/ZapxOverview";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TargetDiseases } from "@/components/sections/TargetDiseases";
import { SpecialContent } from "@/components/sections/SpecialContent";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgressTimeline />
      <ZapxOverview />
      <ComparisonSection />
      <TargetDiseases />
      <SpecialContent />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
