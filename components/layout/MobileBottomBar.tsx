"use client";

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur-md px-4 py-3 flex gap-3">
        <a
          href="#contact"
          className="btn-primary flex-1 text-center text-sm py-3"
        >
          Book Free Session
        </a>
        <a
          href="tel:01150000000"
          className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl border border-[#2A2A2A] px-4 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          aria-label="Call us"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="ml-2">Call</span>
        </a>
      </div>
    </div>
  );
}
