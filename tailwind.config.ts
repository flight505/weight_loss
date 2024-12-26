import type { Config } from "tailwindcss";
import { theme as customTheme } from "./src/lib/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: customTheme.colors.primary,
        secondary: customTheme.colors.secondary,
        neutral: customTheme.colors.neutral,
      },
      spacing: customTheme.spacing,
      borderRadius: customTheme.borderRadius,
      boxShadow: customTheme.shadows,
    },
  },
  plugins: [],
};

export default config;
