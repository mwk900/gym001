import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A] py-12">
      <div className="section-wrap">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-heading text-lg font-bold">
              NorthPeak <span className="text-accent">Performance</span>
            </p>
            <p className="mt-2 text-sm text-[#9CA3AF] max-w-xs">
              Strength coaching and programming for busy people in Nottingham. Train with data, progress with purpose.
            </p>
            <p className="mt-3 text-xs text-[#9CA3AF]/60">
              Demo website built by{" "}
              <a
                href="https://northsummit.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                NorthSummit Agency
              </a>
              . NorthPeak Performance is a fictional business. Not a real service.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">Navigation</p>
            <ul className="space-y-2">
              {[
                { href: "#programs", label: "Programs" },
                { href: "#progress", label: "Results" },
                { href: "#pricing", label: "Pricing" },
                { href: "#about", label: "About" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">Contact</p>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>
                <a href="tel:01150000000" className="hover:text-white transition-colors">
                  0115 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@northpeakperformance.co.uk" className="hover:text-white transition-colors break-all">
                  hello@northpeakperformance.co.uk
                </a>
              </li>
              <li>Nottingham City Centre, NG1</li>
              <li>Mon to Fri 6am to 8pm</li>
              <li>Sat 8am to 1pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2A2A2A] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#9CA3AF]/60">
            2024 NorthPeak Performance (Demo). All rights reserved.
          </p>
          <p className="text-xs text-[#9CA3AF]/60">
            Built by{" "}
            <a
              href="https://northsummit.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              NorthSummit Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
