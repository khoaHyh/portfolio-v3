import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main theme colors
        background: "var(--color-background)",
        lightBackground: "var(--color-light-background)",
        primary: "var(--color-primary)",
        primaryText: "var(--color-primary-text)",
        secondary: "var(--color-secondary)",
        secondaryAlt: "var(--color-secondary-alt)",
        // Additional body text color options
        bodyLightSlateGray: "var(--color-body-light-slate-gray)",
        bodyPastelGreen: "var(--color-body-pastel-green)",
        pinkSoft: "var(--color-pink-soft)",
      },
      fontFamily: {
        sans: ["var(--font-ibmPlexSans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-ibmPlexMono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;
