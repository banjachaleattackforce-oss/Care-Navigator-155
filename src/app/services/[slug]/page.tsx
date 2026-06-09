import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { ButtonLink } from "@/components/ButtonLink";
import { ConsultationForm } from "@/components/ContactForms";
import { JsonLd } from "@/components/JsonLd";
import { brand, professionalDisclaimer, serviceCtaLabels, services } from "@/content/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.seoTitle.replace(" | Care Navigator", ""),
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <JsonLd data={serviceJsonLd(service.title, service.summary, `/services/${service.slug}`)} />
      <JsonLd data={faqJsonLd(service.faq)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/#services" }, { name: service.title, path: `/services/${service.slug}` }])} />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div>
            <span className="eyebrow">{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
            <div className="hero-actions">
              <ButtonLink href={brand.bookingUrl}>{serviceCtaLabels[service.slug] || "Book a Free Initial Consultation"}</ButtonLink>
              <a className="button button-secondary" href={brand.phoneHref}>
                <Phone size={18} aria-hidden />
                {brand.phone}
              </a>
            </div>
          </div>
          <aside className="page-hero-card">
            <span className="card-icon"><Icon size={28} aria-hidden /></span>
            <h2>Who this helps</h2>
            <p>{service.audience}</p>
          </aside>
        </div>
      </section>
      <section className="section content-section">
        <article className="rich-panel">
          <span className="eyebrow">How we help</span>
          <h2>Structured guidance, clear evidence and practical next steps.</h2>
          <p>{service.description}</p>
          <ul className="benefit-list">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>
                <CheckCircle2 size={20} aria-hidden />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <p className="small-note">{professionalDisclaimer}</p>
          <div className="service-inline-cta">
            <ButtonLink href={brand.bookingUrl}>{serviceCtaLabels[service.slug] || "Book a Free Initial Consultation"}</ButtonLink>
          </div>
        </article>
        <aside className="side-panel">
          <span className="eyebrow">Start here</span>
          <h2>{serviceCtaLabels[service.slug] || "Book the first conversation."}</h2>
          <ConsultationForm compact />
        </aside>
      </section>
      <section className="section faq-panel">
        <div className="section-heading">
          <span className="eyebrow">Questions</span>
          <h2>{service.title} FAQs</h2>
        </div>
        <Accordion
          className="faq-accordion"
          defaultOpenIndex={0}
          items={service.faq.map(([question, answer]) => ({
            title: question,
            content: answer
          }))}
        />
      </section>
    </>
  );
}
