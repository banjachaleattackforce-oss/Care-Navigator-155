import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function readProjectFile(filePath: string) {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf8");
}

describe("UI structure", () => {
  it("uses the reusable accordion for service FAQs and family starting points", () => {
    const servicePage = readProjectFile("src/app/services/[slug]/page.tsx");
    const familiesPage = readProjectFile("src/app/for-families/page.tsx");

    expect(servicePage).toContain("Accordion");
    expect(servicePage).toContain("defaultOpenIndex");
    expect(familiesPage).toContain("Accordion");
    expect(servicePage).not.toContain('className="faq-item"');
  });

  it("keeps the home page free from founder photos", () => {
    const homePage = readProjectFile("src/app/page.tsx");

    expect(homePage).not.toMatch(/yvonne-/i);
    expect(homePage).not.toMatch(/WhatsApp Image/i);
  });

  it("keeps about imagery focused on the hero and proof section without a founder gallery", () => {
    const aboutPage = readProjectFile("src/app/about/page.tsx");
    const imageSources = Array.from(aboutPage.matchAll(/src="([^"]*yvonne-[^"]+)"/g)).map((match) => match[1]);

    expect(imageSources[0]).toBe("/images/yvonne-red-dress-alt.jpg");
    expect(aboutPage).toContain("Why listen to me?");
    expect(aboutPage).toContain("Over 1.2 million hours of care delivered since 2009");
    expect(aboutPage).not.toContain("Founder gallery");
    expect(aboutPage).not.toContain('className="founder-gallery"');
  });

  it("uses the final contact triangle and centred article hero layout hooks", () => {
    const contactPage = readProjectFile("src/app/contact/page.tsx");
    const articlePage = readProjectFile("src/app/news/[slug]/page.tsx");
    const aboutPage = readProjectFile("src/app/about/page.tsx");
    const css = readProjectFile("src/app/globals.css");

    expect(contactPage).toContain("contact-triangle");
    expect(contactPage).toContain("contact-hero-panel");
    expect(contactPage).toContain("contact-hero-portrait");
    expect(contactPage).toContain("contact-form-pair");
    expect(contactPage).toContain("contact-form-card");
    expect(contactPage).toContain("showNewsletterOptIn");
    expect(contactPage).not.toContain("contact-newsletter-panel");
    expect(articlePage).toContain("article-hero");
    expect(aboutPage).toContain("about-hero-portrait");
    expect(css).toContain(".article-hero .page-hero-inner");
    expect(css).toContain(".about-hero-portrait img");
  });

  it("uses the supplied Care Navigator logo image for public logo surfaces", () => {
    const header = readProjectFile("src/components/Header.tsx");
    const layout = readProjectFile("src/app/layout.tsx");
    const seo = readProjectFile("src/lib/seo.ts");
    const cmsConfig = readProjectFile("public/admin/config.yml");

    expect(header).toContain("/images/care-navigator-logo.jpeg");
    expect(layout).toContain("/images/care-navigator-logo.jpeg");
    expect(seo).toContain("/images/care-navigator-logo.jpeg");
    expect(cmsConfig).toContain("/images/care-navigator-logo.jpeg");
  });

  it("wires scroll reveal and final page layout polish hooks", () => {
    const layout = readProjectFile("src/app/layout.tsx");
    const homePage = readProjectFile("src/app/page.tsx");
    const familiesPage = readProjectFile("src/app/for-families/page.tsx");
    const professionalsPage = readProjectFile("src/app/for-professionals/page.tsx");
    const contactForms = readProjectFile("src/components/ContactForms.tsx");
    const netlifyDefinitions = readProjectFile("src/components/NetlifyFormDefinitions.tsx");
    const misconceptionComparison = readProjectFile("src/components/MisconceptionComparison.tsx");
    const servicePage = readProjectFile("src/app/services/[slug]/page.tsx");
    const header = readProjectFile("src/components/Header.tsx");
    const css = readProjectFile("src/app/globals.css");

    expect(layout).toContain("ScrollReveal");
    expect(layout).toContain("Mulish");
    expect(layout).toContain("Inter");
    expect(homePage).toContain("family-contact-section");
    expect(homePage).toContain("founder-band-centered");
    expect(homePage).toContain("Helping families navigate self-funded care, Local Authority funding and NHS Continuing Healthcare (CHC)");
    expect(homePage).toContain("services.map");
    expect(homePage).toContain("ServiceCard");
    expect(familiesPage).toContain("families-hero");
    expect(familiesPage).toContain("family-misconceptions-section");
    expect(familiesPage).toContain("family-starting-points-section");
    expect(familiesPage).toContain("MisconceptionComparison");
    expect(familiesPage).toContain("ConsultationForm compact showNewsletterOptIn");
    expect(familiesPage.indexOf("family-consultation-section")).toBeLessThan(familiesPage.indexOf("family-misconceptions-section"));
    expect(familiesPage).toContain("services.map");
    expect(misconceptionComparison).toContain("misconception-compare-row");
    expect(misconceptionComparison).toContain("misconception-column-labels");
    expect(misconceptionComparison).toContain("misconception-rule");
    expect(professionalsPage).toContain("professional-referral-card");
    expect(professionalsPage).toContain("professional-fit-card");
    expect(professionalsPage).toContain("professional-card-pair");
    expect(professionalsPage).toContain("professional-next-step");
    expect(professionalsPage).toContain("professional-form-panel");
    expect(contactForms).toContain("newsletter_opt_in");
    expect(netlifyDefinitions).toContain("newsletter_opt_in");
    expect(header).toContain("nav-dropdown");
    expect(header).toContain("services.map");
    expect(header).toContain("mobile-services-group");
    expect(servicePage).not.toContain("ServiceSelector");
    expect(css).toContain("radial-route-place");
    expect(css).toContain(".scroll-reveal-ready .reveal-on-scroll");
    expect(css).toContain(".family-misconceptions-panel");
    expect(css).toContain(".misconception-column-labels");
    expect(css).toContain(".contact-hero-panel");
    expect(css).toContain("zoom: 0.9");
    expect(css).toContain(".home-page h2");
    expect(css).toContain(".contact-form-pair");
    expect(css).toContain(".final-cta-band .newsletter-form label");
    expect(css).toContain(".nav-dropdown-menu");
  });
});
