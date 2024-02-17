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
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        primaryText: "var(--color-primary-text)",
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
