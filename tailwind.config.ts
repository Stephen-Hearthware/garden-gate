import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softGreen: "#D4EAC8",
        olive: "#6B8E23",
        gardenStone: "#F9F9F6",
        softRed: "#F6B8B8",
        softBlue: "#D6EAF8",
      },
      fontFamily: {
        display: ["'DM Serif Text'", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
