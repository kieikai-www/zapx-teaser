"use client";

import { useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

type ContentItem = {
  id: string;
  categoryLabel: string;
  title: string;
  youtubeId?: string;
};

const CONTENT_ITEMS: ContentItem[] = [
  {
    id: "doc-a",
    categoryLabel: "専門医",
    title: "医師名 A — ZAP X の精度と安全性",
  },
  {
    id: "doc-b",
    categoryLabel: "専門医",
    title: "医師名 B — 非侵襲治療の可能性",
  },
  {
    id: "talk-1",
    categoryLabel: "座談会",
    title: "座談会 Vol.1",
  },
  {
    id: "talk-2",
    categoryLabel: "座談会",
    title: "座談会 Vol.2",
  },
  {
    id: "article-1",
    categoryLabel: "解説記事",
    title: "ZAP X 解説記事",
  },
];

function CardThumbnail({ item }: { item: ContentItem }) {
  if (item.youtubeId) {
    return (
      <img
        src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-zapx-navy-mid">
      <div className="w-14 h-14 rounded-full border border-zapx-cyan/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-zapx-cyan/50 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="text-xs text-muted-foreground tracking-widest">Coming Soon</span>
    </div>
  );
}

export function SpecialContent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "prev" | "next") {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = (card?.offsetWidth ?? 0) + 24;
    el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  }

  return (
    <section id="special" className="py-24 md:py-40 bg-zapx-navy relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-2">
              Special Content
            </p>
            <h2 className="text-3xl md:text-4xl font-black">特別情報</h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("prev")}
              aria-label="前へ"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-zapx-cyan/50 hover:text-zapx-cyan transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="次へ"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-zapx-cyan/50 hover:text-zapx-cyan transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {CONTENT_ITEMS.map((item) => (
            <div
              key={item.id}
              data-card
              className="flex-none w-[calc(33.333%-1rem)] min-w-[280px] snap-start"
            >
              <div className="rounded-xl border border-zapx-cyan/30 overflow-hidden card-border-animate">
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden">
                  <CardThumbnail item={item} />
                </div>

                {/* Title only */}
                <div className="px-4 py-3 bg-zapx-navy-mid">
                  <p className="text-xs text-zapx-cyan mb-1">{item.categoryLabel}</p>
                  <p className="font-bold text-sm leading-snug">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
