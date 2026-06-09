import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ConsultationForm, ProfessionalReferralForm, NewsletterForm } from "@/components/ContactForms";
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
          <header className="contact-intro">
            <span className="eyebrow">Contact</span>
            <h1>Start with a free initial consultation.</h1>
            <p>Tell us what is happening. We will help you understand the next sensible step.</p>
            <div className="contact-list">
              <a href={brand.phoneHref}><Phone size={18} /> {brand.phone}</a>
              <a href={brand.emailHref}><Mail size={18} /> {brand.email}</a>
            </div>
          </header>
          <div className="contact-primary-card">
            <div className="contact-primary-grid">
              <ConsultationForm />
              <aside className="side-panel contact-newsletter-panel">
                <span className="eyebrow">Newsletter</span>
                <h2>Care-funding notes.</h2>
                <NewsletterForm />
              </aside>
            </div>
          </div>
          <div className="contact-referral-row">
            <article className="rich-panel contact-referral-panel">
              <span className="eyebrow">Client referral / professional request</span>
              <h2>Refer a client or request professional input.</h2>
              <ProfessionalReferralForm />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
