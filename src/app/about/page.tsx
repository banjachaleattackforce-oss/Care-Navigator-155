import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, founderCopy, proofPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "About Yvonne Brown",
  description: "Meet Yvonne Brown, founder of Care Navigator and independent care funding guidance specialist."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="page-hero-inner">
          <div>
            <span className="eyebrow">About the founder</span>
            <h1>Yvonne Brown helps families make care decisions with evidence and calm.</h1>
            <p>{founderCopy}</p>
            <ButtonLink href={brand.bookingUrl}>Book a Free Initial Consultation</ButtonLink>
          </div>
          <div className="portrait-frame">
            <Image src="/images/yvonne-red-dress.jpg" alt="Yvonne Brown, founder of Care Navigator" fill priority sizes="(max-width: 900px) 100vw, 420px" />
          </div>
        </div>
      </section>
      <section className="section split-section">
        <div>
          <span className="eyebrow">Founder-led guidance</span>
          <h2>Practical, independent and family-centred.</h2>
          <p>
            Care Navigator is built for the moments when families are handed complex terms, urgent choices and
            fragmented records. Yvonne’s role is to help make the decision route visible, so families and professionals can
            act with clearer evidence and less pressure.
          </p>
        </div>
        <div className="proof-grid">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article key={point.label}>
                <Icon size={24} aria-hidden />
                <h3>{point.label}</h3>
                <p>{point.text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section founder-gallery-section">
        <div className="section-heading">
          <span className="eyebrow">Founder gallery</span>
          <h2>Professional warmth, grounded in real care experience.</h2>
        </div>
        <div className="founder-gallery">
          <figure>
            <div className="gallery-image">
              <Image src="/images/yvonne-polka-dot.jpg" alt="Yvonne Brown in a white and black polka dot dress" fill sizes="(max-width: 900px) 100vw, 420px" />
            </div>
            <figcaption>Founder portrait</figcaption>
          </figure>
          <figure>
            <div className="gallery-image">
              <Image src="/images/yvonne-red-dress.jpg" alt="Yvonne Brown seated in a red dress" fill sizes="(max-width: 900px) 100vw, 420px" />
            </div>
            <figcaption>Care Navigator guidance</figcaption>
          </figure>
          <figure>
            <div className="gallery-image">
              <Image src="/images/yvonne-red-dress-alt.jpg" alt="Yvonne Brown in a warm interior setting" fill sizes="(max-width: 900px) 100vw, 420px" />
            </div>
            <figcaption>Founder-led support</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
