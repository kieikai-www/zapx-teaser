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

export async function getNewsItems(): Promise<NewsItem[]> {
  "use cache";
  try {
    const res = await client.getList<NewsItem>({
      endpoint: "news",
      queries: { orders: "-date", limit: 10 },
    });
    return res.contents;
  } catch {
    return [];
  }
}

export async function getSpecialContent(): Promise<SpecialContentItem[]> {
  "use cache";
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
