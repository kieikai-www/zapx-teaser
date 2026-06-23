export function FooterSection() {
  return (
    <footer className="py-12 bg-[oklch(0.05_0.02_242)] border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
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
              〒000-0000 福岡県福岡市○○区○○ X-X-X
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              TEL: 000-000-0000
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
          © {new Date().getFullYear()} 福岡輝栄会病院. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
