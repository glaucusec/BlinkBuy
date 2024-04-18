/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxs: ["0.65rem", "14px"],
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
