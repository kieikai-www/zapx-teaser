"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { NewsItem } from "@/lib/microcms";

export function ProgressTimelineList({ items }: { items: NewsItem[] }) {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  if (items.length === 0) {
    return <p className="text-sm text-muted-foreground">現在、お知らせはありません。</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 0.07}>
            <button
              onClick={() => setSelected(item)}
              className="w-full text-left flex gap-4 p-4 rounded-xl border border-border bg-zapx-navy hover:border-zapx-cyan/30 transition-colors cursor-pointer"
            >
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
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                {item.body && (
                  <span className="text-xs text-zapx-cyan/60 mt-1 inline-block">
                    続きを読む →
                  </span>
                )}
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => { if (!open) setSelected(null); }}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <p className="text-xs text-zapx-cyan tracking-wider mb-1">{selected.date}</p>
                <DialogTitle className="text-base font-bold leading-snug">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              {selected.body ? (
                <div
                  className="prose prose-sm prose-invert max-w-none text-sm leading-relaxed [&_p]:mb-3 [&_h2]:text-base [&_h2]:font-bold [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mb-1 [&_a]:text-zapx-cyan [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: selected.body }}
                />
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selected.description}
                </p>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
