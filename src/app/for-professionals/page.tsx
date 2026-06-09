import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ProfessionalReferralForm } from "@/components/ContactForms";
import { brand, professionalRoutes } from "@/content/site";

export const metadata: Metadata = {
  title: "For Professionals",
  description: "Care consultancy referral support for solicitors, deputies, attorneys, financial advisers and care professionals."
};

export default function ForProfessionalsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div>
            <span className="eyebrow">For professionals</span>
            <h1>Independent care context for client decisions.</h1>
            <p>
              Refer clients who need practical care-funding, care-package or CHC process support alongside legal,
              deputyship or financial planning.
            </p>
          </div>
        </div>
      </section>
      <section className="section professional-referral-section">
        <article className="rich-panel professional-referral-card">
          <span className="eyebrow">Professional referrals</span>
          <h2>A clear route when care decisions sit beside professional advice.</h2>
          <p>
            Care Navigator can help clarify care context, evidence gaps, decision routes and family questions. This is
            designed to support, not replace, regulated legal or financial advice.
          </p>
        </article>
        <aside className="page-hero-card professional-fit-card">
          <h2>Referral fit</h2>
          {professionalRoutes.map((route) => (
            <p key={route}>{route}</p>
          ))}
        </aside>
      </section>
      <section className="section final-cta-band professional-next-step">
        <div>
          <span className="eyebrow">Professional next step</span>
          <h2>Refer a client or request care context.</h2>
          <p>Use the referral form for client matters, or start with a short conversation about the care-funding question in front of you.</p>
          <div className="hero-actions">
            <ButtonLink href={brand.bookingUrl} variant="secondary">Discuss a Professional Referral</ButtonLink>
          </div>
        </div>
        <div className="professional-form-panel">
          <ProfessionalReferralForm />
        </div>
      </section>
    </>
  );
}
