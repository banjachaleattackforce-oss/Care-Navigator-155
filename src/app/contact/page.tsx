import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ConsultationForm, ProfessionalReferralForm } from "@/components/ContactForms";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free initial consultation with Care Navigator."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="section contact-triangle">
          <div className="contact-hero-panel">
            <header className="contact-intro">
              <span className="eyebrow">Contact</span>
              <h1>Start with a free initial consultation.</h1>
              <p>Tell us what is happening. We will help you understand the next sensible step.</p>
              <div className="contact-list">
                <a href={brand.phoneHref}><Phone size={18} /> {brand.phone}</a>
                <a href={brand.emailHref}><Mail size={18} /> {brand.email}</a>
              </div>
            </header>
            <figure className="portrait-frame contact-hero-portrait">
              <Image
                src="/images/yvonne-red-dress-alt.jpg"
                alt="Yvonne Brown, founder of Care Navigator"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                priority
              />
            </figure>
          </div>
          <div className="contact-form-pair">
            <article className="rich-panel contact-form-card contact-consultation-card">
              <span className="eyebrow">Care Navigator contact form</span>
              <h2>Book a free initial consultation.</h2>
              <p>Use this form for family care-funding questions, CHC guidance, complex care needs or general next-step support.</p>
              <ConsultationForm showNewsletterOptIn />
            </article>
            <article className="rich-panel contact-form-card contact-referral-panel">
              <span className="eyebrow">Client referral / professional request</span>
              <h2>Refer a client or request professional input.</h2>
              <p>Use this form for professional referrals, client context requests and care-planning background for advisory work.</p>
              <ProfessionalReferralForm />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
