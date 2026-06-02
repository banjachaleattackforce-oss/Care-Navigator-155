"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type AccordionItem = {
  title: string;
  content: string;
};

type Props = {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  className?: string;
};

export function Accordion({ items, defaultOpenIndex, className = "" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    typeof defaultOpenIndex === "number" ? defaultOpenIndex : null
  );

  return (
    <div className={`accordion ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `accordion-panel-${index}-${item.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

        return (
          <article className={`accordion-item ${isOpen ? "accordion-item-open" : ""}`} key={item.title}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.title}</span>
                <ChevronDown size={20} aria-hidden />
              </button>
            </h3>
            <div className="accordion-panel" id={contentId} aria-hidden={!isOpen}>
              <p>{item.content}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
