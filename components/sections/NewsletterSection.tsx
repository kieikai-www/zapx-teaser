import { AnimatedSection } from "@/components/AnimatedSection";

const SNS_LINKS = [
  {
    name: "X (Twitter)",
    href: "https://x.com/fukuokakieikai",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100094558385347",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kieikaihp/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function NewsletterSection() {
  return (
    <section
      id="notify"
      className="py-24 md:py-40 bg-zapx-navy relative overflow-hidden"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.17_199_/_6%)_0%,transparent_60%)]" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Stay Updated
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            最新情報を受け取る
          </h2>
          <p className="text-muted-foreground text-lg">
            ZAP-X 導入の進捗・専門医の動画・診療開始のお知らせは
            SNSでお届けします。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center">
          <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">
            Follow us
          </p>
          <div className="flex items-center justify-center gap-4">
            {SNS_LINKS.map((sns) => (
              <a
                key={sns.name}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sns.name}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-zapx-cyan hover:border-zapx-cyan/40 transition-colors"
              >
                {sns.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
