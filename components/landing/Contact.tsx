"use client";

import { useState } from "react";

const GOALS = ["Strength", "Fat Loss", "Muscle Gain", "Athletic Performance", "General Fitness"];
const TIMES = ["Morning", "Midday", "Evening", "Flexible"];

type FormState = {
  name: string;
  phone: string;
  email: string;
  goals: string[];
  times: string[];
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  goals: [],
  times: [],
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleItem(field: "goals" | "times", value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  const summary = `Consultation request from ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nGoals: ${form.goals.join(", ") || "Not specified"}\nPreferred times: ${form.times.join(", ") || "Flexible"}\nMessage: ${form.message || "None"}`;
  const mailHref = `mailto:hello@northpeakperformance.co.uk?subject=${encodeURIComponent("Free Consultation Request")}&body=${encodeURIComponent(summary)}`;

  return (
    <section id="contact" className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                Get started
              </p>
              <h2
                className="font-heading font-semibold text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Book your free consultation
              </h2>
              <p className="text-[#9CA3AF]">
                A 30 minute conversation about your goals, with no obligation and no hard sell.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:01150000000"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#141414] text-[#9CA3AF] group-hover:border-accent group-hover:text-accent transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF]">Phone</p>
                  <p className="font-semibold text-white text-lg">0115 000 0000</p>
                </div>
              </a>

              <a
                href="mailto:hello@northpeakperformance.co.uk"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#141414] text-[#9CA3AF] group-hover:border-accent group-hover:text-accent transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF]">Email</p>
                  <p className="font-semibold text-white text-sm break-all">hello@northpeakperformance.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#141414] text-[#9CA3AF]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF]">Location</p>
                  <p className="font-semibold text-white">Nottingham City Centre, NG1</p>
                  <p className="text-sm text-[#9CA3AF]">5 min from Nottingham Station</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#141414] text-[#9CA3AF]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF]">Hours</p>
                  <p className="text-sm text-white">Mon to Fri: 6am to 8pm</p>
                  <p className="text-sm text-white">Saturday: 8am to 1pm</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-[#2A2A2A]">
              <iframe
                title="Nottingham City Centre NG1"
                src="https://maps.google.com/maps?q=Nottingham+city+centre+NG1&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-52 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: booking form */}
          <div>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 md:p-8"
              >
                <h3 className="font-heading text-xl font-semibold text-white">
                  Book free consultation
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-[#9CA3AF]">Name</label>
                    <input
                      className="w-full min-h-[48px] rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] px-4 py-3 text-white placeholder-[#9CA3AF]/50 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-[#9CA3AF]">Phone</label>
                    <input
                      className="w-full min-h-[48px] rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] px-4 py-3 text-white placeholder-[#9CA3AF]/50 focus:border-accent focus:outline-none transition-colors"
                      placeholder="07700 000000"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-[#9CA3AF]">Email</label>
                  <input
                    className="w-full min-h-[48px] rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] px-4 py-3 text-white placeholder-[#9CA3AF]/50 focus:border-accent focus:outline-none transition-colors"
                    placeholder="you@example.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#9CA3AF]">Goal (select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {GOALS.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => toggleItem("goals", g)}
                        className={`min-h-[40px] rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-150 ${
                          form.goals.includes(g)
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-[#2A2A2A] text-[#9CA3AF] hover:border-accent/40"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#9CA3AF]">Preferred training time</label>
                  <div className="flex flex-wrap gap-2">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleItem("times", t)}
                        className={`min-h-[40px] rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-150 ${
                          form.times.includes(t)
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-[#2A2A2A] text-[#9CA3AF] hover:border-accent/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-[#9CA3AF]">Message (optional)</label>
                  <textarea
                    className="min-h-[100px] w-full rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] px-4 py-3 text-white placeholder-[#9CA3AF]/50 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your training background and what you are working towards"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button type="submit" className="btn-primary w-full">
                  Book free consultation
                </button>

                <p className="text-center text-xs text-[#9CA3AF]/60">
                  Demo form. No data is sent or stored.
                </p>
              </form>
            ) : (
              <div className="space-y-5 rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">Request ready</h3>
                <p className="text-[#9CA3AF]">
                  Use one of the options below to send your message directly.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href={mailHref} className="btn-primary text-center text-sm">
                    Send via Email
                  </a>
                  <a href="tel:01150000000" className="btn-secondary text-center text-sm">
                    Call now
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm(initial); }}
                  className="text-xs text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
