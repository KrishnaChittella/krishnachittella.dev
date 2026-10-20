import type { Config } from "tailwindcss";

// Portfolio ("Engineered Clarity") uses Tailwind's default slate/indigo/teal/emerald.
// Playground ("Vice Noir Systems") uses the vn-* and neon colours below.
const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        vn: {
          canvas: "#0a0a14",
          1: "#120e24",
          2: "#1c1438",
          3: "#271d4d",
          text: "#f8fafc",
          sub: "#94a3b8",
        },
        magenta: "#ff2a85",
        coral: "#ff416c",
        amber: "#ff7a00",
        vcyan: "#05d9e8",
      },
      fontFamily: {
        geist: ["var(--font-geist)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        chivo: ["var(--font-chivo)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
