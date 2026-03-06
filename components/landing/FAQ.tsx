"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How soon will I see results?",
    a: "Most clients notice strength improvements within 3 to 4 weeks. Visible body composition changes typically take 6 to 8 weeks with consistent training and nutrition.",
  },
  {
    q: "Do you work with beginners?",
    a: "Yes. About half my clients started with zero gym experience. The first few sessions focus entirely on movement patterns and building confidence with the basics before adding load.",
  },
  {
    q: "What if I have an injury?",
    a: "I work around injuries regularly. We will discuss your history in the consultation and I will programme movements that are safe for you. I also refer to physios locally in Nottingham when needed.",
  },
  {
    q: "Do you offer nutrition help?",
    a: "Committed and Online plans include a nutrition framework. I focus on practical calorie and protein targets rather than restrictive meal plans. The goal is something you can sustain.",
  },
  {
    q: "Where are sessions held?",
    a: "Central Nottingham, NG1 area. Five minutes from the tram stop and Nottingham Station. Easy parking on side streets nearby.",
  },
  {
    q: "Can I train early mornings?",
    a: "First slot is 6am on weekdays. Early morning sessions are popular so booking ahead helps. The full schedule runs from 6am to 8pm Monday to Friday, and 8am to 1pm on Saturdays.",
  },
  {
    q: "What does the free consultation include?",
    a: "A 30 minute conversation about your goals, training history, and lifestyle. I will give you an honest assessment of what is realistic and which program fits best. No pressure, no hard sell.",
  },
  {
    q: "What if I need to cancel a session?",
    a: "24 hours notice to reschedule at no charge. Life happens and I am flexible, but consistent attendance is what gets results. Sessions cancelled with less than 24 hours notice are charged.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F5F5F3] py-16 md:py-24">
      <div className="section-wrap space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Common questions
          </p>
          <h2
            className="font-heading font-semibold text-[#1A1A1A]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Questions answered
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border-2 bg-white transition-colors duration-200 ${
                  isOpen ? "border-accent/20" : "border-[#EAEAE6]"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#1A1A1A]">{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#EAEAE6] text-[#6B7280] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-[#EAEAE6] px-5 py-4 text-[#6B7280] leading-relaxed md:px-6 md:py-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
