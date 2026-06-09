import { brand } from "@/content/site";

export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://carenavigate.org";
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    legalName: brand.company,
    founder: {
      "@type": "Person",
      name: brand.founder
    },
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/care-navigator-logo.jpeg"),
    telephone: brand.phone,
    email: brand.email,
    areaServed: brand.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area
    })),
    sameAs: []
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: brand.name,
      telephone: brand.phone,
      email: brand.email
    },
    areaServed: brand.serviceAreas,
    url: absoluteUrl(path)
  };
}

export function faqJsonLd(faq: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
