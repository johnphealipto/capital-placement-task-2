/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: "#1D4ED8" },
        dark: { DEFAULT: "#0B0B0B" },
      },
    },
  },
  plugins: [],
};
