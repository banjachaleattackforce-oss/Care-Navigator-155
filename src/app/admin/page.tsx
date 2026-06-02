import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Care Navigator Content Manager",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return (
    <section className="admin-shell" aria-label="Care Navigator content manager">
      <p>Loading Care Navigator content manager...</p>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" strategy="afterInteractive" />
    </section>
  );
}
