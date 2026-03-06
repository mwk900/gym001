import { Hero } from "@/components/landing/Hero";
import { BarriersSelector } from "@/components/landing/BarriersSelector";
import { Programs } from "@/components/landing/Programs";
import { ProgressTracker } from "@/components/landing/ProgressTracker";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { AboutCoach } from "@/components/landing/AboutCoach";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BarriersSelector />
      <Programs />
      <ProgressTracker />
      <Pricing />
      <Testimonials />
      <AboutCoach />
      <FAQ />
      <Contact />
    </main>
  );
}
