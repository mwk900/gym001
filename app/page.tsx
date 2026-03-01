import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "./components/BookingForm";
import { Header } from "./components/Header";

const programs = [
  {
    title: "1:1 Personal Training",
    forWho: "Busy professionals wanting coaching accountability",
    points: ["Individualised programming", "Technique coaching every session", "Monthly progress review"]
  },
  {
    title: "Strength & Hypertrophy Program (12 weeks)",
    forWho: "Lifters chasing muscle and measurable strength",
    points: ["Phased 12-week plan", "Load progression strategy", "Nutrition support guidance"]
  },
  {
    title: "Fat Loss + Strength (8 weeks)",
    forWho: "Clients who want body recomposition without crash dieting",
    points: ["Calorie target framework", "Strength-preserving sessions", "Weekly check-in"]
  },
  {
    title: "Online Coaching",
    forWho: "Remote clients who need structure and expert feedback",
    points: ["App-based training plan", "Weekly technique review", "Coach messaging support"],
    featured: true
  }
];

const testimonials = [
  "“I added 30kg to my deadlift in 12 weeks and finally enjoy training.” — Liam R, Nottingham",
  "“Dropped 6kg while keeping my lifts moving up.” — Sarah T, West Bridgford",
  "“Technique rebuild removed constant back pain under the bar.” — Adam P, Beeston",
  "“Simple, clear coaching that fits around work.” — Hannah J, Nottingham",
  "“Best investment I’ve made in my training consistency.” — Chris M, Mapperley",
  "“Stronger, leaner, and more confident in the gym.” — Kelly D, Arnold"
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-gradient pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div className="section-wrap grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <p className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Nottingham Strength Coaching
              </p>
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Get Stronger. Leaner. More Athletic — With Coaching That Fits Your Life.
              </h1>
              <p className="max-w-xl text-lg text-white/75">
                1:1 coaching and small-group sessions focused on strength, muscle, and performance — built around your schedule.
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <a href="#contact" className="btn-primary shadow-[0_10px_24px_rgba(141,255,47,0.18)]">Book a Free Consultation</a>
                <a href="#programs" className="btn-secondary">View Programs</a>
              </div>
              <div className="grid max-w-xl grid-cols-3 gap-3 text-sm">
                {[
                  "Personalised plan",
                  "Progress tracking",
                  "Technique coaching"
                ].map((item) => (
                  <div key={item} className="card p-3 text-center">{item}</div>
                ))}
              </div>
              <p className="text-xs text-white/50">Demo trust bar: featured podcast, local event speaker, coaching workshop panel.</p>
            </div>
            <div className="relative">
              <div className="card relative aspect-[18/13] w-full overflow-hidden p-2">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image src="/gym/hero.jpg" alt="Athlete training with barbell in gym" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-20">
          <div className="section-wrap space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl">Programs Built for Results</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {programs.map((program) => (
                <article key={program.title} className={`card p-6 ${program.featured ? "shadow-glow" : ""}`}>
                  {program.featured && <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">Featured</span>}
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <p className="mt-2 text-white/70">{program.forWho}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-white/80">
                    {program.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-primary mt-6">Book consult</a>
                </article>
              ))}
            </div>
            <Link href="/programs/online-coaching" className="btn-secondary">Explore Online Coaching details</Link>
          </div>
        </section>

        <section id="results" className="bg-white/5 py-20">
          <div className="section-wrap space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl">Results That Actually Matter</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "+30kg deadlift in 12 weeks",
                "-6kg while keeping strength",
                "Pain-free lifting after technique rebuild"
              ].map((stat) => (
                <div key={stat} className="card p-6 text-xl font-semibold">{stat}</div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item} className="card p-5 text-white/85">{item}</div>
              ))}
            </div>
            <p className="text-xs text-white/50">Demo content.</p>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="section-wrap grid gap-10 lg:grid-cols-2">
            <Image src="/coach-placeholder.svg" alt="Coach Matt W demo portrait" width={640} height={500} className="card w-full p-2" />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl">About Matt W. (Demo)</h2>
              <p className="text-white/75">
                I coach clients who want practical structure, proper lifting technique, and progress they can measure week to week. Sessions are based in Nottingham City Centre and tailored to your lifestyle.
              </p>
              <ul className="grid gap-2 text-white/80">
                <li>• Progressive overload</li>
                <li>• Recovery and sleep focus</li>
                <li>• Technique first coaching</li>
                <li>• Sustainable nutrition habits</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white/5 py-20">
          <div className="section-wrap space-y-8">
            <h2 className="text-3xl font-bold md:text-4xl">Simple Pricing</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Starter (1x/week)", "from £189/mo"],
                ["Standard (2x/week)", "from £349/mo"],
                ["Online Coaching", "from £129/mo"]
              ].map(([name, price]) => (
                <div key={name} className="card p-6">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="mt-1 text-2xl font-extrabold text-accent">{price}</p>
                  <ul className="mt-3 space-y-1 text-white/80">
                    <li>• Personal programme</li>
                    <li>• Progress check-ins</li>
                    <li>• Technique support</li>
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-white/70">Custom plans available.</p>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="section-wrap space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
            <div className="grid gap-3">
              {[
                "How soon will I see results?",
                "Do you work with beginners?",
                "What if I have injuries?",
                "Do you offer nutrition help?",
                "Where are sessions held?",
                "Can I train early mornings?",
                "Do you do group sessions?",
                "What does the free consult include?"
              ].map((q) => (
                <details key={q} className="card p-4">
                  <summary className="cursor-pointer font-semibold">{q}</summary>
                  <p className="mt-2 text-white/70">Yes — this demo answer explains how NorthPeak Performance would tailor this for your schedule and goals.</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/5 py-20">
          <div className="section-wrap grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold md:text-4xl">Book Your Consultation</h2>
              <p className="text-white/75">NorthPeak Performance (Demo) • Nottingham City Centre, UK</p>
              <p><a href="tel:01150000000" className="text-accent">0115 000 0000</a></p>
              <p><a href="mailto:hello@northpeakperformance.co.uk" className="text-accent">hello@northpeakperformance.co.uk</a></p>
              <p className="text-white/70">Availability: weekdays 6am–8pm, Saturdays 8am–1pm.</p>
            </div>
            <BookingForm />
          </div>
        </section>

        <section className="py-20">
          <div className="section-wrap space-y-4">
            <h2 className="text-3xl font-bold">Find me</h2>
            <p className="text-white/70">5 minutes from Nottingham Station, NG1 area. Easy tram and parking access.</p>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Nottingham City Centre map"
                src="https://maps.google.com/maps?q=Nottingham%20city%20centre%20NG1&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="section-wrap grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-bold">NorthPeak Performance (Demo)</p>
            <p className="text-sm text-white/60">Demo website project — not a real business.</p>
          </div>
          <div className="text-sm text-white/70">
            <p>Quick links</p>
            <p>Programs • Pricing • FAQ • Contact</p>
          </div>
          <div className="text-sm text-white/70">
            <p>Social (demo): Instagram • YouTube • LinkedIn</p>
          </div>
        </div>
      </footer>
    </>
  );
}
