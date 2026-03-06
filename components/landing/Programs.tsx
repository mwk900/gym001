"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = {
  label: string;
  weeks: string;
  color: string;
};

type Program = {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  duration: string;
  frequency: string;
  phases: Phase[];
  included: string[];
  outcomes: string[];
};

const programs: Program[] = [
  {
    id: "one-to-one",
    name: "1:1 Coaching",
    tagline: "Ongoing monthly",
    forWho: "Busy professionals who need accountability and direction",
    duration: "Ongoing monthly",
    frequency: "1 to 3 sessions per week",
    phases: [
      { label: "Assessment", weeks: "Wk 1 to 2", color: "#4ECDC4" },
      { label: "Foundation", weeks: "Wk 3 to 6", color: "#FF6B35" },
      { label: "Progressive Build", weeks: "Wk 7+", color: "#A78BFA" },
    ],
    included: [
      "Individualised program built around your schedule",
      "Technique coaching every session",
      "Monthly progress review with lift benchmarks",
      "App-based tracking and progress logging",
      "Direct coach messaging between sessions",
    ],
    outcomes: [
      "Consistent strength progression on compound lifts",
      "Confident, injury-free movement patterns",
      "Training that fits around your actual life",
    ],
  },
  {
    id: "strength-block",
    name: "12 Week Strength Block",
    tagline: "Structured program",
    forWho: "Intermediate lifters who want a structured strength cycle",
    duration: "12 weeks",
    frequency: "3 to 4 sessions per week",
    phases: [
      { label: "Foundation", weeks: "Wk 1 to 4", color: "#4ECDC4" },
      { label: "Build", weeks: "Wk 5 to 8", color: "#FF6B35" },
      { label: "Peak", weeks: "Wk 9 to 12", color: "#A78BFA" },
    ],
    included: [
      "Phased 12-week plan (Foundation, Build, Peak)",
      "Squat, bench press, deadlift progressions",
      "Weekly RPE tracking and load adjustments",
      "Technique videos after each session",
      "Nutrition calorie and protein targets",
    ],
    outcomes: [
      "Average +25 to 35kg on deadlift across 12 weeks",
      "Improved movement quality under load",
      "A repeatable training framework you can run again",
    ],
  },
  {
    id: "recomp",
    name: "8 Week Body Recomp",
    tagline: "Fat loss plus strength",
    forWho: "People who want to lose fat without losing the muscle they have",
    duration: "8 weeks",
    frequency: "2 to 3 sessions per week",
    phases: [
      { label: "Baseline", weeks: "Wk 1 to 2", color: "#4ECDC4" },
      { label: "Cut Phase", weeks: "Wk 3 to 6", color: "#FF6B35" },
      { label: "Consolidate", weeks: "Wk 7 to 8", color: "#A78BFA" },
    ],
    included: [
      "Calorie deficit framework with protein targets",
      "Strength-preserving compound sessions",
      "Weekly check-ins and bodyweight tracking",
      "Practical nutrition guidance (no meal plans)",
      "Cardio strategy to protect muscle",
    ],
    outcomes: [
      "Fat loss without sacrificing strength benchmarks",
      "Sustainable habits you keep after 8 weeks",
      "Understanding of your own calorie needs",
    ],
  },
  {
    id: "online",
    name: "Online Programming",
    tagline: "Remote coaching",
    forWho: "Experienced lifters who want expert programming without in-person sessions",
    duration: "Ongoing monthly",
    frequency: "Flexible, 3 to 5 sessions per week",
    phases: [
      { label: "Onboarding", weeks: "Wk 1", color: "#4ECDC4" },
      { label: "Base Block", weeks: "Wk 2 to 5", color: "#FF6B35" },
      { label: "Progress Block", weeks: "Wk 6+", color: "#A78BFA" },
    ],
    included: [
      "Custom training plan delivered via app",
      "Weekly video form review on key lifts",
      "Coach messaging access (response within 24 hours)",
      "Monthly program updates based on progress",
      "Access to exercise video library",
    ],
    outcomes: [
      "Structured progression without guesswork",
      "Technique improvements via video feedback",
      "Training that adapts month to month",
    ],
  },
];

export function Programs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="programs" className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="section-wrap space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
            What we offer
          </p>
          <h2
            className="font-heading font-semibold text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Programs built for real progress
          </h2>
          <p className="max-w-lg text-[#9CA3AF]">
            Every program is built around compound movements and progressive overload. No fads, no fluff.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {programs.map((program, index) => {
            const isOpen = openId === program.id;
            return (
              <motion.article
                key={program.id}
                layout
                className="overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414]"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Card header - always visible */}
                <button
                  className="w-full p-5 md:p-6 text-left"
                  onClick={() => setOpenId(isOpen ? null : program.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-lg font-semibold text-white">
                          {program.name}
                        </h3>
                        <span className="rounded-full border border-[#2A2A2A] px-2.5 py-0.5 text-xs text-[#9CA3AF]">
                          {program.tagline}
                        </span>
                      </div>
                      <p className="text-sm text-[#9CA3AF]">{program.forWho}</p>
                    </div>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2A2A2A] text-[#9CA3AF] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </div>

                  {/* Stats row */}
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="text-[#9CA3AF]">
                      <span className="font-semibold text-white">{program.duration}</span>
                    </span>
                    <span className="text-[#9CA3AF]">{program.frequency}</span>
                  </div>

                  {/* Phase timeline bar */}
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-1 rounded-lg overflow-hidden h-2">
                      {program.phases.map((phase) => (
                        <div
                          key={phase.label}
                          className="h-full flex-1 rounded-sm"
                          style={{ backgroundColor: phase.color }}
                          title={`${phase.label}: ${phase.weeks}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {program.phases.map((phase) => (
                        <div key={phase.label} className="flex-1">
                          <p className="text-[10px] font-medium" style={{ color: phase.color }}>
                            {phase.label}
                          </p>
                          <p className="text-[10px] text-[#9CA3AF]">{phase.weeks}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#2A2A2A] px-5 py-5 md:px-6 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                              What is included
                            </p>
                            <ul className="space-y-1.5">
                              {program.included.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                              Expected outcomes
                            </p>
                            <ul className="space-y-1.5">
                              {program.outcomes.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <a href="#contact" className="btn-primary inline-flex text-sm">
                          Book a consult
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
