import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#0b0f14",
        panel: "#121923",
        accent: "#8dff2f",
        ink: "#eef2f6"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(141,255,47,0.2), 0 10px 40px rgba(141,255,47,0.12)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(141,255,47,.13), transparent 35%), radial-gradient(circle at 80% 0%, rgba(30,144,255,.18), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
