import { AnimatedSection } from "@/components/AnimatedSection";
import { getNewsItems } from "@/lib/microcms";
import { ProgressTimelineList } from "./ProgressTimelineList";

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

        <ProgressTimelineList items={items} />
      </div>
    </section>
  );
}
