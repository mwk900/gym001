import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0A",
        "bg-card": "#141414",
        "bg-light": "#F5F5F3",
        "bg-light-alt": "#EAEAE6",
        accent: "#FF6B35",
        "accent-hover": "#E55A28",
        secondary: "#4ECDC4",
        tertiary: "#A78BFA",
        "text-sec": "#9CA3AF",
        "text-dark": "#1A1A1A",
        "text-dark-sec": "#6B7280",
        border: "#2A2A2A",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,107,53,0.3), 0 10px 40px rgba(255,107,53,0.15)",
        "glow-sm": "0 0 0 1px rgba(255,107,53,0.2), 0 4px 20px rgba(255,107,53,0.1)",
        card: "0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "hero-noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    }
  },
  plugins: []
};

export default config;
