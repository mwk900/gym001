"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    metric: "+30kg deadlift",
    sub: "in 12 weeks",
    quote:
      "I had been stuck at the same deadlift for over a year. The phased programming and weekly RPE tracking made the difference. I actually understood why I was lifting what I was lifting.",
    name: "Liam R.",
    area: "Nottingham City Centre",
    accentColor: "#A78BFA",
  },
  {
    metric: "Lost 6kg",
    sub: "kept every lift",
    quote:
      "I was worried a cut would tank my strength. It didn't. The nutrition framework was simple, not obsessive, and my bench actually went up during the 8 weeks.",
    name: "Sarah T.",
    area: "West Bridgford",
    accentColor: "#4ECDC4",
  },
  {
    metric: "First pain-free squat",
    sub: "in two years",
    quote:
      "Two years of avoiding squats because of knee discomfort. The technique rebuild and movement screening in the first session changed everything. I squat three times a week now.",
    name: "Adam P.",
    area: "Beeston",
    accentColor: "#FF6B35",
  },
  {
    metric: "6 months consistent",
    sub: "trained every week",
    quote:
      "I have started and stopped the gym so many times. Having sessions booked and a coach who actually checks in between sessions is the only thing that has worked for me.",
    name: "Hannah J.",
    area: "Mapperley",
    accentColor: "#4ECDC4",
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 md:p-7"
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-6 h-12 w-1 rounded-r-full"
        style={{ backgroundColor: t.accentColor }}
      />

      {/* Metric headline */}
      <div className="pl-4">
        <p
          className="font-heading font-bold leading-none tabular-nums"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
            color: t.accentColor,
          }}
        >
          {t.metric}
        </p>
        <p className="mt-0.5 text-sm text-[#9CA3AF]">{t.sub}</p>
      </div>

      <p className="mt-4 text-[0.9375rem] text-[#9CA3AF] leading-relaxed pl-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-4 flex items-center gap-2 pl-4">
        <div
          className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: t.accentColor + "33" }}
        >
          <span style={{ color: t.accentColor }}>
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-[#9CA3AF]">{t.area}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="section-wrap space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
            Client results
          </p>
          <h2
            className="font-heading font-semibold text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Numbers first, quotes second.
          </h2>
          <p className="max-w-lg text-[#9CA3AF]">
            Demo results based on realistic coaching outcomes. Individual results vary.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
