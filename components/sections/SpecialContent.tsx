import { getSpecialContent } from "@/lib/microcms";
import { SpecialContentCarousel } from "./SpecialContentCarousel";

export async function SpecialContent() {
  const items = await getSpecialContent();
  return <SpecialContentCarousel items={items} />;
}
