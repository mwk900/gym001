import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthPeak Performance (Demo) | Strength Coaching Nottingham",
  description:
    "Demo website for a Nottingham personal trainer and strength coach focused on measurable progress.",
  openGraph: {
    title: "NorthPeak Performance (Demo)",
    description:
      "1:1 and small-group strength coaching in Nottingham. Book a free consultation.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
