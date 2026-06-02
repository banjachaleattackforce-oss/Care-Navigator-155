import { ArrowRight, Mail, Newspaper, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import type { NewsCtaBlock } from "@/lib/news";

const defaults: Record<NewsCtaBlock["type"], NewsCtaBlock> = {
  consultation: {
    type: "consultation",
    heading: "Not sure where to start?",
    text: "Book a calm first conversation before the next care-funding decision.",
    buttonLabel: "Book a Free Initial Consultation",
    buttonUrl: "/contact#consultation"
  },
  "professional-referral": {
    type: "professional-referral",
    heading: "Working with a client?",
    text: "Send a professional referral when care context is needed alongside legal, deputyship or financial planning.",
    buttonLabel: "Send Professional Referral",
    buttonUrl: "/for-professionals"
  },
  newsletter: {
    type: "newsletter",
    heading: "Care funding updates",
    text: "Join the newsletter for practical notes on CHC, care funding and complex care planning.",
    buttonLabel: "Join Care Funding Updates",
    buttonUrl: "/news#newsletter"
  },
  "custom-link": {
    type: "custom-link",
    heading: "Continue reading",
    text: "Follow the next useful Care Navigator update.",
    buttonLabel: "Learn more",
    buttonUrl: "/news"
  }
};

function safeBlock(block: NewsCtaBlock) {
  const fallback = defaults[block.type] || defaults.consultation;
  const isSafeUrl =
    block.buttonUrl?.startsWith("/") ||
    block.buttonUrl?.startsWith("https://") ||
    block.buttonUrl?.startsWith("mailto:") ||
    block.buttonUrl?.startsWith("tel:");

  return {
    ...fallback,
    ...block,
    buttonUrl: isSafeUrl ? block.buttonUrl : fallback.buttonUrl
  };
}

export function ArticleCtaBlocks({ blocks }: { blocks: NewsCtaBlock[] }) {
  const visibleBlocks = blocks.length ? blocks.map(safeBlock) : [defaults.newsletter];

  return (
    <div className="article-cta-grid" aria-label="Article next steps">
      {visibleBlocks.map((block, index) => {
        const Icon = block.type === "professional-referral" ? Users : block.type === "newsletter" ? Newspaper : Mail;
        return (
          <aside className={`article-cta-card article-cta-${block.type}`} key={`${block.type}-${index}`}>
            <span className="card-icon">
              <Icon size={22} aria-hidden />
            </span>
            <h2>{block.heading}</h2>
            <p>{block.text}</p>
            <ButtonLink href={block.buttonUrl} variant={block.type === "newsletter" ? "secondary" : "primary"}>
              {block.buttonLabel}
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </aside>
        );
      })}
    </div>
  );
}
