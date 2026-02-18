"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/90 backdrop-blur">
      <div className="section-wrap flex h-20 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-extrabold tracking-wide">
          NorthPeak <span className="text-accent">Performance</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/85 hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm">
            Book Free Consult
          </a>
        </div>
        <button
          type="button"
          className="rounded-lg border border-white/20 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-base md:hidden">
          <div className="section-wrap flex flex-col gap-4 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white/90 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center">
              Book Free Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
