import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { brand, navItems, professionalDisclaimer } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="footer-kicker">Care Funding Guidance</span>
          <h2>Care Navigator</h2>
          <p>{brand.tagline}</p>
          <p className="disclaimer">{professionalDisclaimer}</p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" prefetch={false}>Privacy</Link>
        </nav>
        <address>
          <a href={brand.phoneHref}>
            <Phone size={17} /> {brand.phone}
          </a>
          <a href={brand.emailHref}>
            <Mail size={17} /> {brand.email}
          </a>
        </address>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Care Navigator. All rights reserved.</span>
        <span>Calm &middot; Clear &middot; Evidence-led &middot; Family-centred</span>
      </div>
    </footer>
  );
}
