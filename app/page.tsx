import { HeroSection } from "@/components/sections/HeroSection";
import { ZapxOverview } from "@/components/sections/ZapxOverview";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TargetDiseases } from "@/components/sections/TargetDiseases";
import { ProgressTimeline } from "@/components/sections/ProgressTimeline";
import { DoctorVideos } from "@/components/sections/DoctorVideos";
import { TalkSession } from "@/components/sections/TalkSession";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ZapxOverview />
      <ComparisonSection />
      <TargetDiseases />
      <ProgressTimeline />
      <DoctorVideos />
      <TalkSession />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
