"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#progress", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu instantly, then scroll — avoids layout-shift scroll bug
  const navigate = (href: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="section-wrap flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" className="font-heading text-lg font-bold tracking-tight">
            NorthPeak <span className="text-accent">Performance</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary text-sm py-2.5">
              Book Free Session
            </a>
          </div>

          <button
            type="button"
            className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg border border-[#2A2A2A] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/*
        Fixed overlay — zero impact on document layout.
        The original AnimatePresence height animation shifted the page while
        the browser scrolled to an anchor, landing in the wrong position.
        opacity + pointer-events only, never layout.
      */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-0 top-16 z-40 bg-[#0A0A0A] transition-opacity duration-150 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="section-wrap flex flex-col gap-1 pt-6 pb-8">
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => navigate(link.href)}
              className="min-h-[52px] flex w-full items-center text-left text-lg font-medium text-white/90 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
