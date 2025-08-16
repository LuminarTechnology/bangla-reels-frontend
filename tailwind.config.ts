import type { Config } from "tailwindcss";

export const siteColors = {
  primary: "#E83A57", // Indigo 600
  secondary: "#6366F1", // Indigo 500
  accent: "#FBBF24", // Amber 400
  background: "#F9FAFB", // Gray 50
  foreground: "#111827", // Gray 900
  danger: "#EF4444", // Red 500
  success: "#22C55E", // Green 500
  info: "#3B82F6", // Blue 500
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
