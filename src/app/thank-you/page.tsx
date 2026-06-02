import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div>
          <span className="eyebrow">Thank you</span>
          <h1>Your message has been sent.</h1>
          <p>Yvonne or the Care Navigator team will review your enquiry and respond as soon as possible.</p>
          <div className="hero-actions">
            <ButtonLink href="/" variant="secondary">Back home</ButtonLink>
            <ButtonLink href={brand.phoneHref}>Call {brand.phone}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
