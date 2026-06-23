import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

export function TalkSession() {
  return (
    <section id="media" className="py-24 md:py-40 bg-zapx-navy-mid relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Symposium & Articles
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            座談会・記事
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            専門医による座談会の動画や解説記事を順次公開予定です。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {["座談会 Vol.1", "座談会 Vol.2", "解説記事"].map((title, i) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-zapx-navy overflow-hidden group hover:border-zapx-cyan/40 transition-colors"
              >
                <div className="aspect-video bg-zapx-navy-mid flex flex-col items-center justify-center gap-3 relative">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                    {i < 2 ? (
                      <svg
                        className="w-5 h-5 text-muted-foreground ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-zapx-cyan border-zapx-cyan/40 text-xs"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <div className="p-5">
                  <p className="font-bold text-sm mb-1">{title}</p>
                  <p className="text-muted-foreground text-xs">
                    公開準備中です。SNSをフォローしてお知らせをお受け取りください。
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
