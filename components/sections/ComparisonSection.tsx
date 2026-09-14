import { AnimatedSection } from "@/components/AnimatedSection";

const ROWS = [
  {
    feature: "頭部固定方法",
    zapx: "マスク固定（非侵襲）",
    gamma: "金属フレーム（侵襲的）",
    cyber: "マスク固定",
    zapxBest: true,
  },
  {
    feature: "照射精度",
    zapx: "< 1mm",
    gamma: "< 0.5mm（単回）",
    cyber: "< 1.5mm",
    zapxBest: true,
  },
  {
    feature: "線源",
    zapx: "リニアック（X線）",
    gamma: "コバルト60（γ線）",
    cyber: "リニアック（X線）",
    zapxBest: true,
  },
  {
    feature: "分割照射",
    zapx: "○（柔軟に対応）",
    gamma: "△（制限あり）",
    cyber: "○",
    zapxBest: true,
  },
  {
    feature: "治療できる腫瘍サイズ",
    zapx: "30mm以上も対応",
    gamma: "30mm以下が中心",
    cyber: "30mm以下が中心",
    zapxBest: true,
  },
  {
    feature: "治療時間",
    zapx: "安定（線源劣化なし）",
    gamma: "コバルト劣化で延長",
    cyber: "安定",
    zapxBest: true,
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-40 bg-zapx-navy-mid relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Comparison
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            他の治療法との比較
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ZAP X は既存の放射線手術システムを超える精度と柔軟性を提供します。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium w-1/4">
                    比較項目
                  </th>
                  <th className="p-4 bg-zapx-cyan/5 border-x border-zapx-cyan/20">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-zapx-cyan font-black text-base">
                        ZAP X
                      </span>
                      <span className="text-xs text-zapx-cyan/60">
                        当院導入予定
                      </span>
                    </div>
                  </th>
                  <th className="p-4 text-muted-foreground font-medium">
                    ガンマナイフ
                  </th>
                  <th className="p-4 text-muted-foreground font-medium">
                    サイバーナイフ
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
                  >
                    <td className="p-4 text-muted-foreground">{row.feature}</td>
                    <td className="p-4 text-center bg-zapx-cyan/5 border-x border-zapx-cyan/20">
                      <span
                        className={
                          row.zapxBest
                            ? "text-zapx-cyan font-semibold"
                            : "text-foreground"
                        }
                      >
                        {row.zapx}
                      </span>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {row.gamma}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {row.cyber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
