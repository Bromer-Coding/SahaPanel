import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17202A",
        field: "#F4F7F9",
        line: "#D8E0E7",
        brand: {
          50: "#E9F7F1",
          100: "#CFEFE0",
          500: "#1D9A6C",
          600: "#147C58",
          700: "#0E6045"
        },
        amber: {
          500: "#D88A1D"
        },
        signal: {
          red: "#C44536",
          blue: "#2F73B7"
        }
      },
      boxShadow: {
        panel: "0 14px 40px rgba(23, 32, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
