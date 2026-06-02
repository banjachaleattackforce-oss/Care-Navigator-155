import { describe, expect, it } from "vitest";
import { brand, commonMisconceptions, navItems, serviceCtaLabels, services } from "@/content/site";

describe("Care Navigator content", () => {
  it("uses Care Navigator as the public brand and contains no legacy copy", () => {
    const content = JSON.stringify({ brand, services });

    expect(brand.name).toBe("Care Navigator");
    expect(content).not.toMatch(/The Care Navigator/i);
    expect(content).not.toMatch(/Flexserve/i);
    expect(content).not.toMatch(/home care agency/i);
    expect(content).not.toMatch(/Navigator Care UI/i);
  });

  it("defines the required care consultancy services without prices", () => {
    const serviceTitles = services.map((service) => service.title);

    expect(serviceTitles).toEqual(
      expect.arrayContaining([
        "Initial Case Review",
        "NHS CHC Eligibility Review",
        "CHC Evidence Preparation",
        "MDT Representation",
        "Appeals Support",
        "Self-Funding Care Planning",
        "Care Package Review",
        "Hospital Discharge Planning",
        "Complex Care Planning",
        "Professional Referrals"
      ])
    );
    expect(JSON.stringify(services)).not.toMatch(/£|\bpounds?\b|\bfee\b/i);
  });

  it("defines varied SEO-aware CTA labels for family service cards", () => {
    expect(serviceCtaLabels["initial-case-review"]).toBe("Start with an Initial Case Review");
    expect(serviceCtaLabels["nhs-chc-eligibility-review"]).toBe("Review CHC Eligibility");
    expect(serviceCtaLabels["complex-care-planning"]).toBe("Map Complex Care Needs");
    expect(new Set(Object.values(serviceCtaLabels)).size).toBeGreaterThan(8);
  });

  it("labels the news route as Newsletter without changing the URL", () => {
    expect(navItems).toContainEqual({ label: "Newsletter", href: "/news" });
    expect(navItems.map((item) => item.label)).not.toContain("Resources");
  });

  it("defines calm CHC misconception guidance for the homepage", () => {
    expect(commonMisconceptions.map((item) => item.title)).toEqual([
      "CHC funding is only about diagnosis.",
      "A Checklist means funding is guaranteed.",
      "Self-funding means there is no care-planning risk.",
      "Appeals are only about disagreeing loudly."
    ]);
  });
});
