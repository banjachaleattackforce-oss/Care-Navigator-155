import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNewsTags, getNewsPostsByTag, getNewsTagBySlug } from "@/lib/news";

type Props = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getAllNewsTags().map((tag) => ({ tag: tag.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const newsTag = getNewsTagBySlug(tag);
  if (!newsTag) return {};
  return {
    title: `${newsTag.title} Newsletter`,
    description: newsTag.description
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const newsTag = getNewsTagBySlug(tag);
  if (!newsTag) notFound();
  const posts = getNewsPostsByTag(tag);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div>
            <span className="eyebrow">Topic</span>
            <h1>{newsTag.title}</h1>
            <p>{newsTag.description}</p>
          </div>
        </div>
      </section>
      <section className="section article-grid">
        {posts.map((post) => (
          <Link href={`/news/${post.slug}`} className="article-card" key={post.slug} prefetch={false}>
            <span>{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
