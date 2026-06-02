"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navItems } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-link" aria-label="Care Navigator home" prefetch={false}>
          <Image className="logo-mark" src="/images/care-navigator-logo.jpeg" alt="" width={64} height={64} priority />
          <span>
            <strong>Care Navigator</strong>
            <small>Care funding guidance</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ButtonLink href={brand.bookingUrl} className="hide-small">
            Book consultation
          </ButtonLink>
          <button className="mobile-menu" type="button" aria-label="Open navigation" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${open ? "mobile-panel-open" : ""}`} aria-hidden={!open}>
        <button type="button" className="mobile-close" aria-label="Close navigation" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} prefetch={false}>
            {item.label}
          </Link>
        ))}
        <ButtonLink href={brand.bookingUrl}>Book a Free Initial Consultation</ButtonLink>
      </div>
    </header>
  );
}
