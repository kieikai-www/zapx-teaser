import { AnimatedSection } from "@/components/AnimatedSection";

// Static placeholder data — replaced by MicroCMS data in production
const STATIC_TIMELINE = [
  {
    id: "1",
    date: "2025年12月",
    title: "ZAP X 導入決定",
    description: "福岡輝栄会病院がZAP Surgical Systems社との契約を締結。日本への導入に向けた準備を開始しました。",
    completed: true,
  },
  {
    id: "2",
    date: "2026年前半",
    title: "専門医チーム編成",
    description: "脳神経外科・放射線科の専門医からなるZAP X治療チームを編成。国内外での研修・認定取得を進めています。",
    completed: false,
  },
  {
    id: "3",
    date: "2026年後半",
    title: "施設整備・工事開始",
    description: "ZAP X設置のための専用治療室の設計・工事を開始予定。",
    completed: false,
  },
  {
    id: "4",
    date: "2026年末",
    title: "機器設置・試験稼働",
    description: "ZAP X本体の設置と試験稼働、スタッフトレーニングを実施予定。",
    completed: false,
  },
  {
    id: "5",
    date: "2027年1月",
    title: "診療開始",
    description: "ZAP X による定位放射線手術の診療を開始。",
    completed: false,
  },
];

export function ProgressTimeline() {
  return (
    <section id="progress" className="py-24 md:py-40 bg-zapx-navy-mid relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Progress
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">導入の進捗</h2>
          <p className="text-muted-foreground text-lg">
            2027年1月の診療開始に向けた最新情報をお届けします。
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {STATIC_TIMELINE.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div
                  className={`relative flex md:items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 mt-1 md:mt-0">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        item.completed
                          ? "bg-zapx-cyan border-zapx-cyan box-glow-cyan"
                          : "bg-zapx-navy border-border"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}
                  >
                    <div
                      className={`p-5 rounded-xl border ${
                        item.completed
                          ? "border-zapx-cyan/40 bg-zapx-cyan/5"
                          : "border-border bg-zapx-navy-mid"
                      }`}
                    >
                      <p
                        className={`text-xs tracking-widest mb-2 ${item.completed ? "text-zapx-cyan" : "text-muted-foreground"}`}
                      >
                        {item.date}
                        {item.completed && (
                          <span className="ml-2 text-zapx-cyan">✓ 完了</span>
                        )}
                      </p>
                      <h3 className="font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
