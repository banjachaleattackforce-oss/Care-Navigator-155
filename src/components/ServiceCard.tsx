import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link href={`/services/${service.slug}`} className="service-card" prefetch={false}>
      <span className="card-icon">
        <Icon size={24} aria-hidden />
      </span>
      <span className="eyebrow">{service.eyebrow}</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <span className="text-link">
        Learn more <ArrowRight size={17} aria-hidden />
      </span>
    </Link>
  );
}
