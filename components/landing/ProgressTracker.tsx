"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

// Chart data: 12 weeks of training
const WEEKS = 12;
const CHART_DATA = {
  squat: [80, 82, 85, 88, 90, 93, 97, 100, 102, 105, 107, 110],
  bench: [60, 61, 62.5, 64, 65, 67.5, 70, 72.5, 73.5, 75, 76, 77.5],
  deadlift: [100, 105, 110, 115, 120, 122.5, 127.5, 130, 132.5, 135, 137.5, 140],
};

const LIFTS = [
  { key: "squat" as const, label: "Squat", color: "#FF6B35", gain: "+30kg" },
  { key: "bench" as const, label: "Bench", color: "#4ECDC4", gain: "+17.5kg" },
  { key: "deadlift" as const, label: "Deadlift", color: "#A78BFA", gain: "+40kg" },
];

// SVG chart dimensions
const SVG_W = 560;
const SVG_H = 240;
const CHART_L = 52;    // left margin (y-axis labels)
const CHART_R = 545;   // right edge
const CHART_T = 16;    // top margin
const CHART_B = 210;   // bottom (x-axis)
const CHART_W = CHART_R - CHART_L;  // 493
const CHART_H_RANGE = CHART_B - CHART_T;  // 194

// Data range for y-axis
const Y_MIN = 52;
const Y_MAX = 148;
const Y_RANGE = Y_MAX - Y_MIN;  // 96

function weekToX(weekIdx: number): number {
  return CHART_L + (weekIdx / (WEEKS - 1)) * CHART_W;
}

function kgToY(kg: number): number {
  return CHART_B - ((kg - Y_MIN) / Y_RANGE) * CHART_H_RANGE;
}

function buildPath(data: number[]): string {
  return data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${weekToX(i).toFixed(1)} ${kgToY(v).toFixed(1)}`)
    .join(" ");
}

const GRID_KG = [60, 80, 100, 120, 140];
const X_LABELS = [1, 3, 6, 9, 12];

// Precomputed paths
const PATHS = {
  squat: buildPath(CHART_DATA.squat),
  bench: buildPath(CHART_DATA.bench),
  deadlift: buildPath(CHART_DATA.deadlift),
};

function formatKg(v: number): string {
  return v % 1 === 0 ? `${v}kg` : `${v}kg`;
}

export function ProgressTracker() {
  const [activeWeek, setActiveWeek] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const hasInteracted = useRef(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  // Auto-animate scrubber on scroll entry
  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, 11, {
      duration: 2.5,
      ease: "easeInOut",
      onUpdate: (v) => {
        if (!hasInteracted.current) {
          setActiveWeek(Math.round(v));
        }
      },
    });
    return () => controls.stop();
  }, [isInView]);

  const getWeekFromPointer = useCallback((clientX: number): number => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const rect = svg.getBoundingClientRect();
    // Scale client coords to SVG viewBox coords
    const svgX = ((clientX - rect.left) / rect.width) * SVG_W;
    const fraction = (svgX - CHART_L) / CHART_W;
    return Math.round(Math.max(0, Math.min(1, fraction)) * (WEEKS - 1));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      hasInteracted.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      setActiveWeek(getWeekFromPointer(e.clientX));
    },
    [getWeekFromPointer]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      if (e.buttons === 0) return;
      setActiveWeek(getWeekFromPointer(e.clientX));
    },
    [getWeekFromPointer]
  );

  const scrubberX = weekToX(activeWeek);
  const isLastWeek = activeWeek === WEEKS - 1;

  const currentValues = {
    squat: CHART_DATA.squat[activeWeek],
    bench: CHART_DATA.bench[activeWeek],
    deadlift: CHART_DATA.deadlift[activeWeek],
  };

  return (
    <section id="progress" className="bg-[#0A0A0A] py-16 md:py-24" ref={sectionRef}>
      <div className="section-wrap space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
            Data-driven coaching
          </p>
          <h2
            className="font-heading font-semibold text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Real progress you can measure.
          </h2>
          <p className="max-w-lg text-[#9CA3AF]">
            This is what 12 weeks of structured coaching looks like. Drag the line to explore.
          </p>
        </div>

        {/* Chart container */}
        <div className="overflow-x-auto rounded-2xl border border-[#2A2A2A] bg-[#141414]">
          <div className="min-w-[360px]">
            {/* Legend */}
            <div className="flex flex-wrap gap-4 border-b border-[#2A2A2A] px-4 py-3 md:px-6">
              {LIFTS.map((lift) => (
                <div key={lift.key} className="flex items-center gap-2">
                  <span
                    className="h-2 w-6 rounded-full"
                    style={{ backgroundColor: lift.color }}
                  />
                  <span className="text-xs text-[#9CA3AF]">{lift.label}</span>
                </div>
              ))}
              <div className="ml-auto text-xs text-[#9CA3AF]">
                Week {activeWeek + 1} of {WEEKS}
              </div>
            </div>

            {/* SVG Chart */}
            <div className="px-2 py-4 md:px-4">
              <svg
                ref={svgRef}
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                className="w-full"
                style={{ touchAction: "none" }}
                aria-label="Training progress chart showing lift progression over 12 weeks"
              >
                {/* Grid lines */}
                {GRID_KG.map((kg) => {
                  const y = kgToY(kg);
                  return (
                    <g key={kg}>
                      <line
                        x1={CHART_L}
                        y1={y}
                        x2={CHART_R}
                        y2={y}
                        stroke="#2A2A2A"
                        strokeWidth="1"
                      />
                      <text
                        x={CHART_L - 6}
                        y={y + 4}
                        textAnchor="end"
                        fontSize="11"
                        fill="#6B7280"
                        fontFamily="var(--font-inter)"
                      >
                        {kg}
                      </text>
                    </g>
                  );
                })}

                {/* X-axis labels */}
                {X_LABELS.map((wk) => {
                  const x = weekToX(wk - 1);
                  return (
                    <text
                      key={wk}
                      x={x}
                      y={CHART_B + 18}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#6B7280"
                      fontFamily="var(--font-inter)"
                    >
                      W{wk}
                    </text>
                  );
                })}

                {/* Area fills (subtle) */}
                {LIFTS.map((lift) => (
                  <path
                    key={`area-${lift.key}`}
                    d={`${PATHS[lift.key]} L ${CHART_R} ${CHART_B} L ${CHART_L} ${CHART_B} Z`}
                    fill={lift.color}
                    fillOpacity="0.04"
                  />
                ))}

                {/* Data lines */}
                {LIFTS.map((lift) => (
                  <path
                    key={`line-${lift.key}`}
                    d={PATHS[lift.key]}
                    fill="none"
                    stroke={lift.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                ))}

                {/* Scrubber: vertical line */}
                <line
                  x1={scrubberX}
                  y1={CHART_T}
                  x2={scrubberX}
                  y2={CHART_B}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  opacity="0.4"
                />

                {/* Active data points at scrubber */}
                {LIFTS.map((lift) => {
                  const val = CHART_DATA[lift.key][activeWeek];
                  const cx = scrubberX;
                  const cy = kgToY(val);
                  return (
                    <g key={`dot-${lift.key}`}>
                      <circle cx={cx} cy={cy} r="6" fill={lift.color} opacity="0.2" />
                      <circle cx={cx} cy={cy} r="3.5" fill={lift.color} />
                    </g>
                  );
                })}

                {/* Tooltip box */}
                {(() => {
                  const tooltipX = scrubberX > SVG_W * 0.7 ? scrubberX - 110 : scrubberX + 10;
                  return (
                    <g>
                      <rect
                        x={tooltipX}
                        y={CHART_T + 4}
                        width={100}
                        height={62}
                        rx="6"
                        fill="#1A1A1A"
                        stroke="#2A2A2A"
                        strokeWidth="1"
                      />
                      {LIFTS.map((lift, i) => {
                        const val = CHART_DATA[lift.key][activeWeek];
                        return (
                          <text
                            key={lift.key}
                            x={tooltipX + 10}
                            y={CHART_T + 22 + i * 16}
                            fontSize="11"
                            fill={lift.color}
                            fontFamily="var(--font-inter)"
                          >
                            {lift.label}: {formatKg(val)}
                          </text>
                        );
                      })}
                    </g>
                  );
                })()}

                {/* Invisible drag rect covering chart area */}
                <rect
                  x={CHART_L}
                  y={CHART_T}
                  width={CHART_W}
                  height={CHART_H_RANGE}
                  fill="transparent"
                  style={{ cursor: "ew-resize" }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Stat cards below chart */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {LIFTS.map((lift) => {
            const val = currentValues[lift.key];
            const startVal = CHART_DATA[lift.key][0];
            const delta = val - startVal;

            return (
              <motion.div
                key={lift.key}
                className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-4 md:p-5"
                animate={{ borderColor: isLastWeek ? lift.color + "60" : "#2A2A2A" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs text-[#9CA3AF]">{lift.label}</p>
                <p
                  className="font-heading mt-1 font-bold tabular-nums text-white"
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 2rem)",
                    color: isLastWeek ? lift.color : "white",
                  }}
                >
                  {formatKg(val)}
                </p>
                {delta > 0 && (
                  <p
                    className="mt-0.5 text-xs font-semibold"
                    style={{ color: isLastWeek ? lift.color : "#9CA3AF" }}
                  >
                    {isLastWeek ? lift.gain : `+${delta}kg`}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA below chart */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-5 md:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#9CA3AF] max-w-md">
            Every NorthPeak client gets a progress dashboard like this. No guesswork, just measurable results every week.
          </p>
          <a href="#contact" className="btn-primary shrink-0">
            Start tracking yours
          </a>
        </div>
      </div>
    </section>
  );
}
