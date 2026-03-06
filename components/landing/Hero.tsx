"use client";

import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";

const metrics = [
  { value: 12400, suffix: " kg", label: "lifted this month" },
  { value: 340, suffix: "+", label: "sessions this year" },
  { value: 97, suffix: "%", label: "client retention" },
];

const headline = "Train with data.\nProgress with purpose.";
const words = headline.split(/(\s+)/);

function AnimatedCounter({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => {
        el.textContent =
          value >= 1000
            ? Math.round(v).toLocaleString("en-GB") + suffix
            : Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [value, suffix, delay]);

  return (
    <span
      ref={ref}
      className="tabular-nums font-heading font-bold text-white"
      style={{ fontSize: "clamp(4rem, 10vw, 8rem)", lineHeight: 1 }}
    >
      0{suffix}
    </span>
  );
}

const trustBadges = ["REPS Registered", "Level 3 PT", "First Aid Certified", "Insured"];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0A0A0A] py-16 md:py-24 flex items-center">
      {/* Background metric counters */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center gap-8 md:gap-16 overflow-hidden select-none"
        aria-hidden="true"
      >
        {metrics.map((m, i) => (
          <div key={m.label} className="opacity-[0.08] whitespace-nowrap">
            <AnimatedCounter value={m.value} suffix={m.suffix} delay={i * 0.15} />
          </div>
        ))}
      </div>

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,107,53,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-wrap relative z-10 grid items-center gap-10 lg:grid-cols-2">
        {/* Left: text content */}
        <div className="space-y-6">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Nottingham Strength Coaching
          </motion.p>

          {/* Headline with word-reveal */}
          <h1
            className="font-heading font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
          >
            {words.map((word, i) => {
              if (/^\s+$/.test(word)) {
                return word.includes("\n") ? (
                  <br key={i} />
                ) : (
                  <span key={i}> </span>
                );
              }
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.07,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="inline-block"
                >
                  {word.includes("\n") ? (
                    <>
                      {word.split("\n").map((part, j) => (
                        <span key={j}>
                          {part}
                          {j < word.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              );
            })}
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-md text-lg text-[#9CA3AF]"
          >
            1:1 strength coaching and programming for busy people in Nottingham.
          </motion.p>


          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="flex flex-wrap gap-2"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#2A2A2A] bg-[#141414] px-3 py-1.5 text-xs text-[#9CA3AF]"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative order-first lg:order-last"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#2A2A2A]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/gym/hero.jpg"
                alt="Strength training session at NorthPeak Performance gym"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="absolute -bottom-4 -left-4 rounded-xl border border-[#2A2A2A] bg-[#141414] px-4 py-3 shadow-card"
          >
            <p className="text-xs text-[#9CA3AF]">Average strength gain</p>
            <p className="font-heading text-2xl font-bold text-accent">+29%</p>
            <p className="text-xs text-[#9CA3AF]">across all clients, 12 weeks</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
