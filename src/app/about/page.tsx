import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, founderCopy, proofPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "About Yvonne Brown",
  description: "Meet Yvonne Brown, founder of Care Navigator and independent care funding guidance specialist."
};

const whyListenPoints = [
  "Over 1.2 million hours of care delivered since 2009",
  "Thousands of families supported",
  "Extensive experience in complex care",
  "Experience with NHS Continuing Healthcare pathways",
  "Experience designing and managing complex care packages",
  "CQC-regulated service leadership",
  "Specialist knowledge of care funding and care planning"
];

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
          <div className="portrait-frame about-hero-portrait">
            <Image src="/images/yvonne-red-dress-alt.jpg" alt="Yvonne Brown, founder of Care Navigator, seated in a red dress" fill priority sizes="(max-width: 900px) 100vw, 520px" />
          </div>
        </div>
      </section>
      <section className="section split-section about-proof-section">
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
      <section className="section why-listen-section">
        <div className="rich-panel why-listen-panel">
          <div>
            <span className="eyebrow">Why listen to me?</span>
            <h2>Over 20 years in health and social care.</h2>
            <ul className="benefit-list">
              {whyListenPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={19} aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="small-note">
              This experience provides practical insight into how care needs are evidenced, assessed and funded.
            </p>
          </div>
          <div className="portrait-frame why-listen-image">
            <Image src="/images/yvonne-polka-dot.jpg" alt="Yvonne Brown in a white and black polka dot dress" fill sizes="(max-width: 900px) 100vw, 420px" />
          </div>
        </div>
      </section>
    </>
  );
}
