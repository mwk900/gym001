"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const barriers = [
  {
    id: "confused",
    label: "I don't know what to do in the gym",
    emoji: "?",
    response:
      "Most people spend years doing the same exercises with no clear plan and wonder why they stagnate. Good coaching starts with a proper assessment and a structured program built around your goals. In your first session, we establish baselines on your key lifts and build from there.",
    program: "Start with 1:1 Coaching",
    href: "#contact",
  },
  {
    id: "plateaued",
    label: "I've been training but not seeing results",
    emoji: "~",
    response:
      "You probably have the work ethic but not the structure. A phased program with progressive overload tracking fixes this in weeks. I will audit your current training in our first session and rebuild the programming around what your body actually responds to.",
    program: "Start with a free consultation",
    href: "#contact",
  },
  {
    id: "inconsistent",
    label: "I keep starting and stopping",
    emoji: ">",
    response:
      "Inconsistency is usually a motivation problem disguised as a scheduling problem. When you have sessions booked, a coach expecting you, and a program showing real progress, showing up becomes easy. The 2x per week Committed plan is built for exactly this.",
    program: "See the Committed plan",
    href: "#pricing",
  },
  {
    id: "cautious",
    label: "I'm worried about getting injured",
    emoji: "!",
    response:
      "This is the right concern to have, and the right coach can fix it completely. I work around injuries regularly, and technique coaching is built into every session. We prioritise movement quality before adding load, every time.",
    program: "Book a free chat first",
    href: "#contact",
  },
];

export function BarriersSelector() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = barriers.find((b) => b.id === activeId);

  return (
    <section className="bg-[#F5F5F3] py-16 md:py-24">
      <div className="section-wrap space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Where you are now
          </p>
          <h2
            className="font-heading font-semibold text-[#1A1A1A]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            What is holding you back?
          </h2>
          <p className="max-w-lg text-[#6B7280]">
            Select the one that feels most like you. I will show you exactly how to fix it.
          </p>
        </div>

        {/* 2x2 grid of barrier cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {barriers.map((barrier) => {
            const isActive = activeId === barrier.id;
            return (
              <button
                key={barrier.id}
                onClick={() => setActiveId(isActive ? null : barrier.id)}
                className={`group relative flex min-h-[80px] items-start gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-200 ${
                  isActive
                    ? "border-accent bg-white shadow-glow-sm"
                    : "border-[#EAEAE6] bg-white hover:border-accent/40"
                }`}
                aria-pressed={isActive}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-accent text-white"
                      : "bg-[#EAEAE6] text-[#6B7280] group-hover:bg-accent/10 group-hover:text-accent"
                  }`}
                >
                  {barrier.emoji}
                </span>
                <span
                  className={`font-semibold transition-colors ${
                    isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]"
                  }`}
                >
                  {barrier.label}
                </span>
                {isActive && (
                  <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Response panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border-2 border-accent/20 bg-white p-6 md:p-8"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <span className="font-heading text-lg font-bold text-accent">N</span>
                </div>
                <div className="space-y-4 flex-1">
                  <p className="text-[#1A1A1A] leading-relaxed text-[1.0625rem]">
                    {active.response}
                  </p>
                  <a href={active.href} className="btn-primary inline-flex">
                    {active.program}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
