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

// date は担当者が手入力するテキスト。「2026年8月2日」のほか 20260802・2026/8/2・2026-08-02・全角数字も受け付け、
// 表示は「2026年8月2日」に揃え、並べ替えは API の文字列ソートではなく数値で行う
function parseDate(date: string): { y: number; m: number; d: number } | null {
  const s = date.normalize("NFKC").trim();
  const m =
    s.match(/^(\d{4})(\d{2})(\d{2})$/) ??
    s.match(/(\d{4})\s*[年/.\-]\s*(\d{1,2})\s*[月/.\-]\s*(\d{1,2})/);
  return m ? { y: Number(m[1]), m: Number(m[2]), d: Number(m[3]) } : null;
}

function dateValue(date: string): number {
  const p = parseDate(date);
  return p ? p.y * 10000 + p.m * 100 + p.d : 0;
}

function normalizeNews(item: NewsItem): NewsItem {
  const p = parseDate(item.date);
  return p ? { ...item, date: `${p.y}年${p.m}月${p.d}日` } : item;
}

export async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const res = await client.getList<NewsItem>({
      endpoint: "news",
      queries: { limit: 100 },
    });
    return res.contents
      .map(normalizeNews)
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
    const item = await client.get<NewsItem>({
      endpoint: "news",
      contentId,
      queries: { draftKey },
      customRequestInit: { cache: "no-store" },
    });
    return normalizeNews(item);
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
