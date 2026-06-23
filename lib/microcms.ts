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

export type ProgressItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  completed: boolean;
};

export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  content: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  category: "video" | "article" | "symposium";
};

export async function getProgressItems() {
  return client.getList<ProgressItem>({
    endpoint: "progress",
    queries: { orders: "date", limit: 20 },
  });
}

export async function getArticles() {
  return client.getList<ArticleItem>({
    endpoint: "articles",
    queries: { orders: "-date", limit: 10 },
  });
}
