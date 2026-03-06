import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NorthPeak Performance | Strength Coaching Nottingham",
  description:
    "1:1 strength coaching and programming for busy people in Nottingham. Train with data, progress with purpose.",
  openGraph: {
    title: "NorthPeak Performance",
    description:
      "Train with data. Progress with purpose. Strength coaching in Nottingham.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
