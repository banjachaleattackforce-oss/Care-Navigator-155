import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Care Navigator enquiries and newsletter signups."
};

export default function PrivacyPage() {
  return (
    <section className="section article-shell">
      <h1>Privacy Policy</h1>
      <p>Care Navigator collects enquiry information so we can respond to consultation, referral and newsletter requests.</p>
      <p>Form submissions may be processed through Netlify Forms. Do not send highly sensitive clinical records through a website form unless requested through a suitable secure route.</p>
      <p>You can request deletion or correction of your details by emailing hello@carenavigator.org.</p>
    </section>
  );
}
