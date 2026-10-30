import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not defined");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  body?: string;
};

export type SpecialContentItem = {
  id: string;
  title: string;
  categoryLabel: string;
  youtubeId?: string;
};

// date は「2026年8月2日」形式のテキストなので、API の文字列ソートではなく数値で並べ替える
function dateValue(date: string): number {
  const m = date.match(/(\d+)年(\d+)月(\d+)日/);
  return m ? Number(m[1]) * 10000 + Number(m[2]) * 100 + Number(m[3]) : 0;
}

export async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const res = await client.getList<NewsItem>({
      endpoint: "news",
      queries: { limit: 100 },
    });
    return res.contents
      .sort((a, b) => dateValue(b.date) - dateValue(a.date))
      .slice(0, 10);
  } catch {
    return [];
  }
}

// microCMS の「画面プレビュー」から下書きを取得する
export async function getNewsDraft(
  contentId: string,
  draftKey: string
): Promise<NewsItem | null> {
  try {
    return await client.get<NewsItem>({
      endpoint: "news",
      contentId,
      queries: { draftKey },
      customRequestInit: { cache: "no-store" },
    });
  } catch {
    return null;
  }
}

export async function getSpecialContent(): Promise<SpecialContentItem[]> {
  try {
    const res = await client.getList<SpecialContentItem>({
      endpoint: "special-content",
      queries: { orders: "createdAt", limit: 20 },
    });
    return res.contents;
  } catch {
    return [];
  }
}
