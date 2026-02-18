import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Coaching Program | NorthPeak Performance (Demo)",
  description:
    "12-week online strength coaching structure with weekly check-ins and technique feedback."
};

export default function OnlineCoachingPage() {
  return (
    <main className="section-wrap py-16">
      <Link href="/" className="text-accent">← Back to home</Link>
      <div className="mt-6 space-y-8">
        <h1 className="text-4xl font-extrabold">Online Coaching (Demo)</h1>
        <p className="max-w-3xl text-white/75">
          Built for people who want high-level structure and accountability without fixed in-person sessions.
        </p>
        <section className="card p-6">
          <h2 className="text-2xl font-bold">Week structure</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
            <li>Monday: plan update and training priorities</li>
            <li>Midweek: video technique check and adjustments</li>
            <li>Friday: progress review, metrics, next-week setup</li>
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="text-2xl font-bold">What you get</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
            <li>Personalised strength or body-composition plan</li>
            <li>Exercise video feedback and movement coaching</li>
            <li>Habit + nutrition guidance matched to your goals</li>
            <li>Coach chat support and progression tracking</li>
          </ul>
        </section>
        <Link href="/#contact" className="btn-primary">Book a Free Consultation</Link>
      </div>
    </main>
  );
}
