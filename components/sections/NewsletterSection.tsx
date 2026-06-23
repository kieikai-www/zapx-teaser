"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SNS_LINKS = [
  {
    name: "X (Twitter)",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LINE",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.627.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
  },
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to email service
    setSubmitted(true);
  }

  return (
    <section
      id="notify"
      className="py-24 md:py-40 bg-zapx-navy relative overflow-hidden"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.17_199_/_6%)_0%,transparent_60%)]" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Stay Updated
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            最新情報を受け取る
          </h2>
          <p className="text-muted-foreground text-lg">
            ZAP X 導入の進捗・専門医の動画・診療開始のお知らせを
            メールでお届けします。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <div className="text-center p-8 rounded-xl border border-zapx-cyan/40 bg-zapx-cyan/5">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-zapx-cyan font-bold text-lg mb-2">
                ご登録ありがとうございます
              </p>
              <p className="text-muted-foreground text-sm">
                最新情報をお届けします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="メールアドレスを入力"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-zapx-navy-mid border-border focus:border-zapx-cyan text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="bg-zapx-cyan text-zapx-navy font-bold hover:bg-zapx-cyan/90 flex-shrink-0"
                >
                  登録
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                登録解除はいつでも可能です。プライバシーポリシーに同意の上ご登録ください。
              </p>
            </form>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.35} className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">
            SNS でもフォローする
          </p>
          <div className="flex items-center justify-center gap-4">
            {SNS_LINKS.map((sns) => (
              <a
                key={sns.name}
                href={sns.href}
                aria-label={sns.name}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-zapx-cyan hover:border-zapx-cyan/40 transition-colors"
              >
                {sns.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
