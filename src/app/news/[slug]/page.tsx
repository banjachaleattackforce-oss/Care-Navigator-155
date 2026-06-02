import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCtaBlocks } from "@/components/ArticleCtaBlocks";
import { MarkdownContent } from "@/components/MarkdownContent";
import { NewsTagList } from "@/components/NewsTagList";
import { formatNewsDate, getAllNewsPosts, getNewsPost, resolveNewsPostTags } from "@/lib/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllNewsPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return {};

  return {
    title: (post.seoTitle || post.title).replace(" | Care Navigator", ""),
    description: post.seoDescription || post.summary
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero article-hero">
        <div className="page-hero-inner">
          <div>
            <span className="eyebrow">{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <span className="article-meta">{formatNewsDate(post.date)} · {post.author}</span>
          </div>
        </div>
      </section>
      <article className="section article-shell">
        <MarkdownContent content={post.body} />
        <NewsTagList tags={resolveNewsPostTags(post)} className="article-tags" />
        <ArticleCtaBlocks blocks={post.ctaBlocks} />
      </article>
    </>
  );
}
