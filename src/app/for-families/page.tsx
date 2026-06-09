import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, commonMisconceptions, familyRoutes, serviceCtaLabels, services } from "@/content/site";

export const metadata: Metadata = {
  title: "For Families",
  description: "Care funding and complex care planning support for families navigating CHC, discharge, care reviews and self-funding decisions."
};

export default function ForFamiliesPage() {
  const familyStartingPoints = familyRoutes.map((route) => ({
    title: route,
    content:
      "Care Navigator can help you turn this situation into a clearer route: what evidence to gather, what questions to ask, and which care-funding or planning step should come next."
  }));

  return (
    <>
      <section className="page-hero families-hero">
        <div className="page-hero-inner">
          <div>
            <span className="eyebrow">For families</span>
            <h1>Clear care-funding guidance when your family has too much to carry.</h1>
            <p>Support for adult children, spouses, attorneys and relatives facing CHC, discharge, care-package and self-funding decisions.</p>
            <ButtonLink href={brand.bookingUrl}>Book a Free Initial Consultation</ButtonLink>
          </div>
          <aside className="page-hero-card">
            <h2>Common starting points</h2>
            <Accordion className="family-accordion" items={familyStartingPoints} />
          </aside>
        </div>
      </section>
      <section className="section family-misconceptions-section">
        <div className="family-misconceptions-panel">
          <div className="section-heading centered">
            <span className="eyebrow">Common misconceptions</span>
            <h2>What families often believe vs. the reality.</h2>
          </div>
          <div className="misconception-compare-list">
            {commonMisconceptions.map((item) => (
              <article className="misconception-compare-row" key={item.title}>
                <div className="misconception-belief">
                  <XCircle size={28} aria-hidden />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Common belief</p>
                  </div>
                </div>
                <div className="misconception-rule" aria-hidden />
                <div className="misconception-reality">
                  <CheckCircle2 size={28} aria-hidden />
                  <div>
                    <h3>The reality</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section service-grid">
        {services.slice(0, 9).map((service) => (
          <article className="compact-card" key={service.slug}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <Link className="text-link" href={`/services/${service.slug}`} prefetch={false}>
              {serviceCtaLabels[service.slug]}
            </Link>
          </article>
        ))}
      </section>
      <section className="section final-cta-band">
        <span className="eyebrow">Next step</span>
        <h2>Bring the care-funding picture into focus.</h2>
        <p>Start with one calm conversation, then decide whether an evidence review, CHC route plan or complex care planning support is the right next step.</p>
        <ButtonLink href={brand.bookingUrl}>Book a Free Initial Consultation</ButtonLink>
      </section>
    </>
  );
}
