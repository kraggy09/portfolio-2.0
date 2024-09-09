/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#ECEDEE",
      },
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
