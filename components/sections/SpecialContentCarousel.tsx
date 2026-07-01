"use client";

import { useRef, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import type { SpecialContentItem } from "@/lib/microcms";

function extractYouTubeId(value: string): string {
  // youtu.be/VIDEOID or youtube.com/watch?v=VIDEOID or plain ID
  const shortMatch = value.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = value.match(/[?&]v=([^?&]+)/);
  if (longMatch) return longMatch[1];
  return value; // already a bare ID
}

function CardThumbnail({ item }: { item: SpecialContentItem }) {
  if (item.youtubeId) {
    const vid = extractYouTubeId(item.youtubeId);
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://img.youtube.com/vi/${vid}/hqdefault.jpg`}
        alt={item.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://img.youtube.com/vi/${vid}/sddefault.jpg`;
        }}
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

export function SpecialContentCarousel({ items }: { items: SpecialContentItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingItem, setPlayingItem] = useState<SpecialContentItem | null>(null);

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

        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">現在、特別情報はありません。</p>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {items.map((item) => (
              <div
                key={item.id}
                data-card
                className="flex-none w-[calc(33.333%-1rem)] min-w-[280px] snap-start"
              >
                <button
                  onClick={() => item.youtubeId ? setPlayingItem(item) : undefined}
                  className={`w-full text-left rounded-xl border border-zapx-cyan/30 overflow-hidden card-border-animate block ${item.youtubeId ? "cursor-pointer hover:border-zapx-cyan/60 transition-colors" : ""}`}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <CardThumbnail item={item} />
                    {item.youtubeId && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-zapx-cyan/90 flex items-center justify-center">
                          <svg className="w-6 h-6 text-zapx-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-3 bg-zapx-navy-mid">
                    <p className="text-xs text-zapx-cyan mb-1">{item.categoryLabel}</p>
                    <p className="font-bold text-sm leading-snug">{item.title}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog
        open={playingItem !== null}
        onOpenChange={(open) => { if (!open) setPlayingItem(null); }}
      >
        <DialogContent className="!w-[90vw] !max-w-5xl p-0 overflow-hidden" showCloseButton={true}>
          {playingItem?.youtubeId && (
            <div className="aspect-video w-full">
              <iframe
                key={playingItem.id}
                src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(playingItem.youtubeId)}?autoplay=1`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
