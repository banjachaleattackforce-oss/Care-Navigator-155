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

  it("uses unique founder gallery images on the about page", () => {
    const aboutPage = readProjectFile("src/app/about/page.tsx");
    const imageSources = Array.from(aboutPage.matchAll(/src="([^"]*yvonne-[^"]+)"/g)).map((match) => match[1]);
    const galleryBlock = aboutPage.slice(aboutPage.indexOf('className="founder-gallery"'));
    const gallerySources = Array.from(galleryBlock.matchAll(/src="([^"]*yvonne-[^"]+)"/g)).map((match) => match[1]);

    expect(imageSources[0]).toBe("/images/yvonne-red-dress-alt.jpg");
    expect(aboutPage).toContain("Why listen to me?");
    expect(aboutPage).toContain("Over 1.2 million hours of care delivered since 2009");
    expect(gallerySources).toEqual([
      "/images/yvonne-polka-dot.jpg",
      "/images/yvonne-red-dress.jpg",
      "/images/yvonne-red-dress-alt.jpg"
    ]);
    expect(new Set(gallerySources).size).toBe(gallerySources.length);
  });
});
