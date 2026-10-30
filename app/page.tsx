import { HeroSection } from "@/components/sections/HeroSection";
import { ProgressTimeline } from "@/components/sections/ProgressTimeline";
import { ZapxOverview } from "@/components/sections/ZapxOverview";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TargetDiseases } from "@/components/sections/TargetDiseases";
import { SpecialContent } from "@/components/sections/SpecialContent";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FooterSection } from "@/components/sections/FooterSection";

// microCMS の更新を最大5分で反映させる
export const revalidate = 300;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "福岡輝栄会病院",
  department: {
    "@type": "MedicalClinic",
    name: "輝栄会定位放射線治療センター（FUKUOKA ZAP-X NEXUS）",
    url: "https://zapx-teaser.kieikai.or.jp/",
    medicalSpecialty: "Neurologic",
  },
  telephone: "092-681-3115",
  address: {
    "@type": "PostalAddress",
    postalCode: "813-0044",
    addressRegion: "福岡県",
    addressLocality: "福岡市東区",
    streetAddress: "千早4丁目14-40",
    addressCountry: "JP",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
