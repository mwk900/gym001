"use client";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    sub: "1 session per week",
    price: "£189",
    period: "/month",
    popular: false,
    features: [
      "Personalised programming",
      "Technique coaching each session",
      "Monthly progress review",
      "App-based tracking",
    ],
  },
  {
    id: "committed",
    name: "Committed",
    sub: "2 sessions per week",
    price: "£349",
    period: "/month",
    popular: true,
    features: [
      "Everything in Starter",
      "Nutrition framework",
      "Weekly check-ins",
      "Priority scheduling",
      "Direct coach messaging",
    ],
  },
  {
    id: "online",
    name: "Online",
    sub: "Remote coaching",
    price: "£129",
    period: "/month",
    popular: false,
    features: [
      "Custom training plan",
      "Weekly video form review",
      "Coach messaging access",
      "Monthly program updates",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#F5F5F3] py-16 md:py-24">
      <div className="section-wrap space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            Investment
          </p>
          <h2
            className="font-heading font-semibold text-[#1A1A1A]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Straightforward pricing
          </h2>
          <p className="max-w-lg text-[#6B7280]">
            No joining fees, no hidden costs. Cancel anytime.
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="-mx-5 flex snap-x-container gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`snap-x-item w-[80vw] max-w-[320px] shrink-0 rounded-2xl border-2 p-6 md:w-auto md:max-w-none md:shrink md:p-7 ${
                tier.popular
                  ? "border-accent bg-white shadow-glow-sm md:-mt-4 md:mb-[-16px]"
                  : "border-[#EAEAE6] bg-white"
              }`}
            >
              {tier.popular && (
                <div className="mb-4 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  Most popular
                </div>
              )}
              <h3 className="font-heading text-xl font-bold text-[#1A1A1A]">{tier.name}</h3>
              <p className="mt-0.5 text-sm text-[#6B7280]">{tier.sub}</p>
              <div className="mt-4 flex items-end gap-1">
                <span
                  className="font-heading font-bold text-[#1A1A1A]"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
                >
                  {tier.price}
                </span>
                <span className="mb-1 text-sm text-[#6B7280]">{tier.period}</span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#1A1A1A]">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200 min-h-[48px] flex items-center justify-center ${
                  tier.popular
                    ? "bg-accent text-white hover:bg-[#E55A28]"
                    : "border border-[#EAEAE6] text-[#1A1A1A] hover:border-accent hover:text-accent"
                }`}
              >
                Book free consult
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6B7280]">
          Not sure which plan? The free consultation helps us figure that out together.
        </p>
      </div>
    </section>
  );
}
