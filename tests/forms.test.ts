import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Netlify form registration", () => {
  it("declares all JavaScript-rendered form names in static HTML", () => {
    const formsHtml = fs.readFileSync(path.join(process.cwd(), "public", "__forms.html"), "utf8");

    expect(formsHtml).toContain('name="consultation-enquiry"');
    expect(formsHtml).toContain('name="professional-referral"');
    expect(formsHtml).toContain('name="newsletter-signup"');
    expect(formsHtml).toContain('name="consent"');
  });

  it("exposes article CTA block fields in the CMS config", () => {
    const cmsConfig = fs.readFileSync(path.join(process.cwd(), "public", "admin", "config.yml"), "utf8");

    expect(cmsConfig).toContain("https://care-navigator-120.netlify.app");
    expect(cmsConfig).toContain("ctaBlocks");
    expect(cmsConfig).toContain("consultation");
    expect(cmsConfig).toContain("professional-referral");
    expect(cmsConfig).toContain("newsletter");
    expect(cmsConfig).toContain("custom-link");
  });

  it("uses the static Decap CMS admin entry instead of an app route loading shell", () => {
    const adminHtml = fs.readFileSync(path.join(process.cwd(), "public", "admin", "index.html"), "utf8");

    expect(adminHtml).toContain("netlify-identity-widget.js");
    expect(adminHtml).toContain("decap-cms@3.7.3");
    expect(fs.existsSync(path.join(process.cwd(), "src", "app", "admin", "page.tsx"))).toBe(false);
  });

  it("logs redacted browser debug output for failed Netlify submissions", () => {
    const formsComponent = fs.readFileSync(path.join(process.cwd(), "src", "components", "ContactForms.tsx"), "utf8");

    expect(formsComponent).toContain("[Care Navigator form debug]");
    expect(formsComponent).toContain("__CARE_NAVIGATOR_LAST_FORM_DEBUG__");
    expect(formsComponent).toContain("redactedFieldSummary");
    expect(formsComponent).toContain("responseBodyPreview");
  });
});
