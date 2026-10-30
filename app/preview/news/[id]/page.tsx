import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDraft } from "@/lib/microcms";
import { ProgressTimelineList } from "@/components/sections/ProgressTimelineList";

export const metadata: Metadata = {
  title: "お知らせプレビュー",
  robots: { index: false, follow: false },
};

// microCMS の画面プレビューURL:
// /preview/news/{CONTENT_ID}?draftKey={DRAFT_KEY}
export default async function NewsPreview(props: PageProps<"/preview/news/[id]">) {
  const { id } = await props.params;
  const { draftKey } = await props.searchParams;
  if (typeof draftKey !== "string") notFound();

  const item = await getNewsDraft(id, draftKey);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-zapx-navy-mid">
      <div className="bg-zapx-cyan text-zapx-navy text-center text-xs font-bold py-2 tracking-wider">
        プレビュー表示中（サイトにはまだ公開されていません）
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-2">
          News
        </p>
        <h2 className="text-2xl md:text-3xl font-black mb-8">お知らせ</h2>

        <ProgressTimelineList items={[item]} />

        <p className="text-xs text-muted-foreground mt-6">
          ※ カードをクリックすると、本文のポップアップを確認できます。
        </p>
      </div>
    </main>
  );
}
