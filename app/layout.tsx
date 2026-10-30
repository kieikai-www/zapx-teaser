import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zapx-teaser.kieikai.or.jp"),
  alternates: { canonical: "/" },
  title: "FUKUOKA ZAP-X NEXUS | 輝栄会定位放射線治療センター",
  description:
    "2027年2月、福岡輝栄会病院「輝栄会定位放射線治療センター（FUKUOKA ZAP-X NEXUS）」に、日本に数台しかない放射線治療装置「ZAP-X」が導入されます。頭を開かずに脳腫瘍を治療する革新的な技術。",
  openGraph: {
    title: "FUKUOKA ZAP-X NEXUS | 輝栄会定位放射線治療センター",
    description:
      "2027年2月、日本に数台しかない放射線治療装置「ZAP-X」を備えた輝栄会定位放射線治療センターが開設。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "FUKUOKA ZAP-X NEXUS | 輝栄会定位放射線治療センター",
    description:
      "2027年2月、日本に数台しかない放射線治療装置「ZAP-X」を備えた輝栄会定位放射線治療センターが開設。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
      {/* 開発中のアクセスは計測しない */}
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-HY075NWHCW" />
      )}
    </html>
  );
}
