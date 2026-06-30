import { CountdownTimer } from "@/components/CountdownTimer";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zapx-navy">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none grayscale opacity-30">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
          src="https://www.youtube.com/embed/_Ty1WzimIIM?autoplay=1&mute=1&loop=1&playlist=_Ty1WzimIIM&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
          title="ZAP X"
          allow="autoplay; encrypted-media"
          frameBorder={0}
        />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.17 199 / 30%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.17 199 / 30%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Darkening overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-zapx-navy/80 via-zapx-navy/70 to-zapx-navy" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.17_199_/_8%)_0%,transparent_70%)]" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-zapx-cyan opacity-40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-zapx-cyan opacity-40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-zapx-cyan opacity-40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-zapx-cyan opacity-40" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8 max-w-5xl">
        <Badge
          variant="outline"
          className="border-zapx-cyan text-zapx-cyan text-xs tracking-widest px-4 py-1.5"
        >
          COMING 2027.01
        </Badge>

        <div className="space-y-2">
          <p className="text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase">
            福岡輝栄会病院
          </p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tight gradient-text-cyan">
            ZAP X
          </h1>
          <p className="text-lg md:text-2xl font-light text-muted-foreground mt-2">
            Gyroscopic Radiosurgery System
          </p>
        </div>

        <p className="text-xl md:text-3xl font-medium text-foreground max-w-2xl leading-relaxed">
          脳を開かずに、
          <br className="md:hidden" />
          <span className="text-zapx-cyan">脳腫瘍を治す。</span>
        </p>

        <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
          日本に数台しかない最先端の定位放射線手術システムが、
          <br />
          2027年1月、福岡輝栄会病院に導入されます。
        </p>

        <div className="flex flex-col items-center gap-3 mt-4">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            導入まで
          </p>
          <CountdownTimer />
        </div>

        <a
          href="#about"
          className="mt-4 flex flex-col items-center gap-2 text-muted-foreground hover:text-zapx-cyan transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">詳しく見る</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
