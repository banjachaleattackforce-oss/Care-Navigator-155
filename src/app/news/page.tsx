import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/ContactForms";
import { NewsTagList } from "@/components/NewsTagList";
import { newsletterPitch } from "@/content/site";
import { getAllNewsPosts, getAllNewsTags } from "@/lib/news";

export const metadata: Metadata = {
  title: "Newsletter and Updates",
  description: "Care funding updates, NHS CHC notes, appeals and complex care planning guidance from Care Navigator."
};

export default function NewsPage() {
  const posts = getAllNewsPosts();
  const tags = getAllNewsTags();

  return (
    <>
      <section className="page-hero newsletter-hero">
        <div className="page-hero-inner centered-page-hero newsletter-hero-inner">
          <div>
            <span className="eyebrow">Newsletter and updates</span>
            <h1>Care funding notes for families and professionals.</h1>
            <p>Plain-English updates on NHS CHC, care funding, evidence preparation, appeals and planning.</p>
          </div>
          <aside className="page-hero-card">
            <h2>Browse by topic</h2>
            <NewsTagList tags={tags} />
          </aside>
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
      <section className="section final-cta-band" id="newsletter">
        <span className="eyebrow">Care funding updates</span>
        <h2>Join the newsletter.</h2>
        <p>{newsletterPitch}</p>
        <NewsletterForm />
      </section>
    </>
  );
}
