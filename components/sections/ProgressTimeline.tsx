import { AnimatedSection } from "@/components/AnimatedSection";
import { getNewsItems } from "@/lib/microcms";

export async function ProgressTimeline() {
  const items = await getNewsItems();

  return (
    <section id="progress" className="py-16 md:py-20 bg-zapx-navy-mid relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="mb-8">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-2">
            News
          </p>
          <h2 className="text-2xl md:text-3xl font-black">お知らせ</h2>
        </AnimatedSection>

        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">現在、お知らせはありません。</p>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.07}>
                <div className="flex gap-4 p-4 rounded-xl border border-border bg-zapx-navy hover:border-zapx-cyan/30 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg border border-border bg-zapx-navy-mid flex flex-col items-center justify-center gap-0.5">
                    <svg
                      className="w-5 h-5 text-zapx-cyan/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 7v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[9px] text-muted-foreground leading-tight text-center px-1">
                      {item.date.replace("年", "\n")}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zapx-cyan mb-1 tracking-wider">
                      {item.date}
                    </p>
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
