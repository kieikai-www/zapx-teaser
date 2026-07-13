import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="relative py-12 bg-[oklch(0.05_0.02_242)] border-t border-border overflow-hidden">
      <Image
        src="/images/hospital-exterior.png"
        alt=""
        fill
        className="object-cover object-bottom opacity-25 grayscale"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.02_242)] via-[oklch(0.05_0.02_242)/75%] to-[oklch(0.05_0.02_242)/55%]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-zapx-cyan font-black text-xl tracking-wider">
              ZAP X
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              福岡輝栄会病院
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-xs">
              〒813-0044 福岡県福岡市東区千早４丁目１４−４０
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              TEL: 092-681-3115
            </p>
          </div>

          <nav className="flex gap-6">
            {["プライバシーポリシー", "お問い合わせ", "病院サイト"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-zapx-cyan transition-colors"
                >
                  {label}
                </a>
              )
            )}
          </nav>
        </div>

        <div className="section-divider my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © 2026 福岡輝栄会病院. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
