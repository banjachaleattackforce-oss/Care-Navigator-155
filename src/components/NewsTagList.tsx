import Link from "next/link";
import type { NewsTag } from "@/lib/news";

export function NewsTagList({ tags, className = "" }: { tags: NewsTag[]; className?: string }) {
  if (!tags.length) return null;

  return (
    <div className={`tag-list ${className}`.trim()}>
      {tags.map((tag) => (
        <Link key={tag.slug} href={`/news/tags/${tag.slug}`} prefetch={false}>
          {tag.title}
        </Link>
      ))}
    </div>
  );
}
