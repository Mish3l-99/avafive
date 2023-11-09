import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#F4F4F4",
        primary: "#1B4B66",
        dark: "#13101E",
        highlight: "#FF8C4B",
        bright: "#FFFFFF",
        grey: "#F1F1F1",
        error: "#B00020",
        lightText: "#B6B6B6",
        primaryTint: "#639599",

        typeHigh: "#171520",
        typeLow: "#626262",
      },
    },
  },
  plugins: [],
};

export default config;
