import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { ButtonLink } from "@/components/ButtonLink";
import { ConsultationForm } from "@/components/ContactForms";
import { NetlifyFormDefinitions } from "@/components/NetlifyFormDefinitions";
import { ServiceCard } from "@/components/ServiceCard";
import { brand, commonMisconceptions, familyRoutes, journeySteps, proofPoints, services } from "@/content/site";
import { getAllNewsPosts } from "@/lib/news";

export default function HomePage() {
  const posts = getAllNewsPosts().slice(0, 3);

  return (
    <>
      <NetlifyFormDefinitions />
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Independent care funding guidance</span>
          <h1>Helping families navigate NHS CHC, care funding and complex care decisions.</h1>
          <p>
            Founder-led, evidence-informed guidance for families and professionals who need clarity before an assessment,
            review, discharge, appeal or self-funding decision.
          </p>
          <div className="hero-actions">
            <ButtonLink href={brand.bookingUrl}>Book a Free Initial Consultation</ButtonLink>
            <a className="button button-secondary" href={brand.phoneHref}>
              <Phone size={18} aria-hidden />
              {brand.phone}
            </a>
          </div>
        </div>
        <div className="hero-visual hero-route-map" aria-label="Compass-style care funding route map">
          <div className="compass-core">
            <span>CN</span>
          </div>
          <div className="route-node route-node-family">Family concern</div>
          <div className="route-node route-node-evidence">Evidence review</div>
          <div className="route-node route-node-chc">CHC eligibility</div>
          <div className="route-node route-node-care">Care plan</div>
          <div className="route-card route-card-top">CHC evidence review</div>
          <div className="route-card route-card-bottom">Complex care planning</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Trust signals">
        {proofPoints.map((point) => {
          const Icon = point.icon;
          return (
            <article key={point.label}>
              <Icon size={24} aria-hidden />
              <strong>{point.label}</strong>
              <span>{point.text}</span>
            </article>
          );
        })}
      </section>

      <section className="section split-section family-contact-section">
        <div>
          <span className="eyebrow">When families contact us</span>
          <h2>A calm route through decisions that rarely feel simple.</h2>
          <p>
            Care Navigator helps when care funding, changing needs and professional decisions start moving faster than
            the family can comfortably process.
          </p>
        </div>
        <div className="check-panel">
          {familyRoutes.map((route) => (
            <p key={route}>
              <CheckCircle2 size={19} aria-hidden />
              {route}
            </p>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading centered">
          <span className="eyebrow">Services</span>
          <h2>Care consultancy without care-agency confusion.</h2>
          <p>Each conversation starts with the situation, urgency and support needed.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section founder-band founder-band-simple founder-band-centered">
        <div>
          <span className="eyebrow">Meet Yvonne Brown</span>
          <h2>Experienced, independent and practical.</h2>
          <p>Founder-led guidance for families who need clear thinking at difficult care-funding moments.</p>
          <ButtonLink href="/about" variant="secondary">About Yvonne</ButtonLink>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading centered">
          <span className="eyebrow">Journey</span>
          <h2>From uncertainty to a written route plan.</h2>
        </div>
        <div className="process-grid">
          {journeySteps.map((step, index) => (
            <article key={step.title} className="process-step">
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section misconceptions-section">
        <div className="section-heading centered">
          <span className="eyebrow">Common misconceptions</span>
          <h2>Care funding decisions are rarely as simple as the headline.</h2>
          <p>
            These are some of the assumptions families often hear before the evidence has been reviewed properly.
          </p>
        </div>
        <Accordion items={commonMisconceptions} className="misconceptions-accordion" />
      </section>

      <section className="section resource-preview">
        <div className="section-heading">
          <span className="eyebrow">Newsletter</span>
          <h2>Care funding updates for families and professionals.</h2>
        </div>
        <div className="article-grid">
          {posts.map((post) => (
            <Link key={post.slug} className="article-card" href={`/news/${post.slug}`} prefetch={false}>
              <span>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <strong>Read article <ArrowRight size={16} aria-hidden /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section consultation-section">
        <div>
          <span className="eyebrow">Free initial consultation</span>
          <h2>Tell us what is happening. We will help you find the next question.</h2>
          <p>Use the consultation form or visit the Newsletter page to join care funding updates.</p>
          <ButtonLink href="/news#newsletter" variant="secondary">Join care funding updates</ButtonLink>
        </div>
        <ConsultationForm compact />
      </section>
    </>
  );
}
