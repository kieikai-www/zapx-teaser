import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
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
  title: "ZAP X 導入予定 | 福岡輝栄会病院",
  description:
    "2027年2月、福岡輝栄会病院に日本に数台しかない放射線治療装置「ZAP X」が導入されます。頭を開かずに脳腫瘍を治療する革新的な技術。",
  openGraph: {
    title: "ZAP X 導入予定 | 福岡輝栄会病院",
    description:
      "2027年2月、日本に数台しかない放射線治療装置「ZAP X」が福岡輝栄会病院に導入。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAP X 導入予定 | 福岡輝栄会病院",
    description:
      "2027年2月、日本に数台しかない放射線治療装置「ZAP X」が福岡輝栄会病院に導入。",
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
    </html>
  );
}
