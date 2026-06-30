"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const POINTS = [
  {
    number: "01",
    title: "1mm以下の精度で照射",
    description:
      "ジャイロスコープ式の2軸回転機構により、従来機を超える位置精度を実現。治療中もリアルタイムで位置ずれを検出・補正し、常に1mm以内の精度を維持します。",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
        />
        <circle cx="12" cy="12" r="9" strokeWidth={1} strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "頭蓋骨を開かない非侵襲治療",
    description:
      "頭部固定用の金属ピンや金属フレームは不要。柔軟なマスクで固定するだけで治療が可能です。患者さんへの身体的負担を最小限に抑えます。",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "外来または1泊入院で完結",
    description:
      "ほとんどの症例は外来治療または1泊入院で対応可能。コバルト線源を使わないリニアック式のため治療時間が安定しており、分割照射にも柔軟に対応できます。",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
];

export function ZapxOverview() {
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  // One-way latches: once tripped by scroll, never reset — immune to scroll jitter or
  // the sticky pin releasing at the end, so the darkened state and content can't "come back".
  const [isDark, setIsDark] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.35) setIsDark(true);
    if (latest > 0.55) setShowContent(true);
  });

  return (
    <section id="about" className="relative bg-zapx-navy">
      <div className="section-divider absolute top-0 left-0 right-0 z-20" />

      {/* Fixed-length pinned scroll: image darkens to solid, then heading + cards appear and stay */}
      <div ref={pinRef} className="relative h-[280vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 grayscale">
            <Image
              src="/images/zap-x.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 bg-zapx-navy transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: isDark ? 0.82 : 0.08 }}
          />

          <div
            className={`relative z-10 w-full max-w-6xl px-6 transition-all duration-[1200ms] ease-out ${
              showContent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
              <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-3 md:mb-4">
                What is ZAP X
              </p>
              <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6">
                ZAP X とは？
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                ZAP X（ザップ エックス）は、シリコンバレー発のZAP Surgical
                Systems社が開発した
                最先端の定位放射線手術（SRS）システムです。
                CyberKnifeの発明者であるスタンフォード大学の神経外科医
                Dr. John Adlerが設立した同社の最新鋭機器です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {POINTS.map((point) => (
                <div
                  key={point.number}
                  className="relative p-4 md:p-8 rounded-xl border border-zapx-cyan/25 bg-zapx-navy-mid/85 backdrop-blur-sm card-border-animate group"
                >
                  <div className="text-zapx-cyan mb-3 md:mb-6 w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-zapx-cyan/10 absolute top-3 right-4 md:top-6 md:right-6 group-hover:text-zapx-cyan/20 transition-colors">
                    {point.number}
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs md:text-sm hidden sm:block">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
