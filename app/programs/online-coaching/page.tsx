import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Coaching | NorthPeak Performance",
  description:
    "Remote strength coaching with weekly check-ins, technique video review, and a custom training plan. Based in Nottingham, coaching anywhere."
};

export default function OnlineCoachingPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen py-16 md:py-24">
      <div className="section-wrap space-y-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">Program detail</p>
          <h1 className="font-heading font-bold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Online Programming
          </h1>
          <p className="max-w-xl text-[#9CA3AF] text-lg">
            Remote coaching for experienced lifters who want expert programming without in-person sessions.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6">
            <h2 className="font-heading text-lg font-semibold text-white mb-4">Weekly structure</h2>
            <ul className="space-y-3 text-[#9CA3AF]">
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />Monday: program for the week delivered to your app</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />Midweek: video technique review and coaching notes</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />Friday: progress check and next-week adjustments</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6">
            <h2 className="font-heading text-lg font-semibold text-white mb-4">What is included</h2>
            <ul className="space-y-3 text-[#9CA3AF]">
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />Custom training plan via app (updated monthly)</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />Weekly video form review on compound lifts</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />Coach messaging (response within 24 hours)</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />Nutrition calorie and protein targets</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <p className="text-white font-semibold mb-1">From £129 per month</p>
          <p className="text-[#9CA3AF] text-sm mb-4">No joining fee. Cancel anytime with one month notice.</p>
          <Link href="/#contact" className="btn-primary inline-flex">
            Book a free consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
