import Image from "next/image";

const credentials = [
  "REPS Level 3",
  "BSc Sport Science",
  "First Aid Certified",
  "Insured",
];

export function AboutCoach() {
  return (
    <section id="about" className="bg-[#F5F5F3] py-16 md:py-24">
      <div className="section-wrap">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-[#EAEAE6]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/gym/hero.jpg"
                alt="Coaching session at NorthPeak Performance, Nottingham gym"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                The coach
              </p>
              <h2
                className="font-heading font-semibold text-[#1A1A1A]"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Why I coach this way
              </h2>
            </div>

            <p className="text-[#1A1A1A] leading-relaxed text-[1.0625rem]">
              I started coaching because I spent years training without direction and wasted most of them. I tried every program, every split, never tracked anything properly, and wondered why progress stalled.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Now I help people skip the guesswork. Sessions are based at a central Nottingham gym in the NG1 area, five minutes from the station. If you want structure, accountability, and someone who actually tracks your progress week to week, get in touch.
            </p>

            <div className="flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[#EAEAE6] bg-white px-3.5 py-1.5 text-sm font-medium text-[#1A1A1A]"
                >
                  {c}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-secondary-light inline-flex">
              Book your free session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
