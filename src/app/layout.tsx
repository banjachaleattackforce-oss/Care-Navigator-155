import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Cormorant_Garamond } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { NetlifyIdentityWidget } from "@/components/NetlifyIdentityWidget";
import { brand } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap"
});

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://the-care-navigator.netlify.app"),
  title: {
    default: "Care Navigator | NHS CHC and Care Funding Guidance",
    template: "%s | Care Navigator"
  },
  description:
    "Independent care funding, NHS Continuing Healthcare, CHC evidence review and complex care planning guidance for families and professionals.",
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    images: ["/images/yvonne-red-dress.jpg"]
  },
  icons: {
    icon: "/images/the-care-navigator-mark.svg",
    shortcut: "/images/the-care-navigator-mark.svg",
    apple: "/images/the-care-navigator-mark.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <NetlifyIdentityWidget />
      </body>
    </html>
  );
}
