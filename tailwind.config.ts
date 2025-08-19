import type { Config } from "tailwindcss";

export const siteColors = {
  accent: "#FBBF24",
  background: "#F9FAFB",
  foreground: "#111827",
  danger: "#EF4444",
  success: "#22C55E",
  info: "#3B82F6",
};

const config: Config = {
  darkMode: "class",
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...siteColors,
      },
    },
  },
  plugins: [],
};

export default config;
