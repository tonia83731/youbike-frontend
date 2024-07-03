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
        dark: "#000002",
        light: "#FBF9FC",
        green: {
          dark: "#206A5D",
          light: "#C2E662",
          normal: "#80B214",
        },
        yellow: "#FFCC29",
        orange: "#F58634",
      },
    },
  },
  plugins: [],
};
export default config;
