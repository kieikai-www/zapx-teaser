import { AnimatedSection } from "@/components/AnimatedSection";

const DISEASES = [
  {
    name: "脳転移",
    description: "肺がん・乳がん・大腸がん・腎がんなど各種がんからの脳転移",
    icon: "🧠",
  },
  {
    name: "髄膜腫",
    description: "脳を包む髄膜に発生する良性・悪性腫瘍",
    icon: "🔬",
  },
  {
    name: "神経鞘腫",
    description: "聴神経腫瘍など神経に発生する腫瘍",
    icon: "⚡",
  },
  {
    name: "脳動静脈奇形",
    description: "脳内の血管異常による疾患",
    icon: "💫",
  },
  {
    name: "グリオーマ",
    description: "分割照射を組み合わせた治療アプローチが可能",
    icon: "🎯",
  },
  {
    name: "その他の頭蓋内病変",
    description: "頭頸部領域の腫瘍・機能的疾患など",
    icon: "✦",
  },
];

export function TargetDiseases() {
  return (
    <section className="py-24 md:py-40 bg-zapx-navy relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Target Conditions
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">対象疾患</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ZAP X は脳・頭頸部の広範な疾患に対応可能です。
            担当医にご相談ください。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {DISEASES.map((disease, i) => (
            <AnimatedSection key={disease.name} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-border bg-zapx-navy-mid hover:border-zapx-cyan/40 transition-all hover:-translate-y-1 group">
                <div className="text-3xl mb-4">{disease.icon}</div>
                <h3 className="font-bold text-base mb-2 group-hover:text-zapx-cyan transition-colors">
                  {disease.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {disease.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">
            ※ 適応の判断には担当医師による診察が必要です。すべての症例に適応されるわけではありません。
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
