"use client";

import { useEffect } from "react";

const revealSelector = [
  ".hero-copy",
  ".hero-visual",
  ".trust-strip article",
  ".section-heading",
  ".split-section > div",
  ".check-panel",
  ".service-card",
  ".compact-card",
  ".founder-band",
  ".process-step",
  ".misconceptions-accordion",
  ".misconception-compare-row",
  ".misconception-belief",
  ".misconception-rule",
  ".misconception-reality",
  ".family-starting-points-panel",
  ".article-card",
  ".consultation-section > div",
  ".contact-form",
  ".page-hero-card",
  ".rich-panel",
  ".side-panel",
  ".contact-newsletter-panel",
  ".contact-referral-panel",
  ".final-cta-band",
  ".proof-grid article",
  ".founder-gallery figure",
  ".article-shell",
  ".article-cta-card",
  ".accordion-item"
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    document.documentElement.classList.add("scroll-reveal-ready");

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
