import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { ButtonLink } from "@/components/ButtonLink";
import { ConsultationForm } from "@/components/ContactForms";
import { MisconceptionComparison } from "@/components/MisconceptionComparison";
import { serviceCtaLabels, services, brand, commonMisconceptions, familyRoutes } from "@/content/site";

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
        <div className="page-hero-inner family-hero-single">
          <div>
            <span className="eyebrow">For families</span>
            <h1>Clear care-funding guidance when your family has too much to carry.</h1>
            <p>Support for adult children, spouses, attorneys and relatives facing CHC, discharge, care-package and self-funding decisions.</p>
            <ButtonLink href={brand.bookingUrl}>Book a Free Initial Consultation</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section consultation-section family-consultation-section stacked-form-section">
        <div>
          <span className="eyebrow">Next step</span>
          <h2>Start with a calm consultation.</h2>
          <p>Share what is happening now, then decide whether CHC guidance, funding navigation, risk review or family advisory support is the right next step.</p>
        </div>
        <ConsultationForm compact showNewsletterOptIn />
      </section>
      <section className="section family-misconceptions-section">
        <div className="family-misconceptions-panel">
          <div className="section-heading centered">
            <span className="eyebrow">Common misconceptions</span>
            <h2>What families often believe vs. the reality.</h2>
          </div>
          <MisconceptionComparison items={commonMisconceptions} />
        </div>
      </section>
      <section className="section family-starting-points-section">
        <div className="family-starting-points-panel">
          <div className="section-heading centered">
            <span className="eyebrow">Common starting points</span>
            <h2>When families contact us.</h2>
          </div>
          <Accordion className="family-accordion" items={familyStartingPoints} />
        </div>
      </section>
      <section className="section service-grid family-service-grid">
        {services.map((service) => (
          <article className="compact-card service-highlight-card" key={service.slug}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <ButtonLink href={`/services/${service.slug}`} variant="secondary">
              {serviceCtaLabels[service.slug] || "Learn more"}
            </ButtonLink>
          </article>
        ))}
      </section>
    </>
  );
}
