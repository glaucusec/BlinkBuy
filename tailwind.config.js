/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: ["0.65rem", "14px"],
      },
    },
  },
  plugins: [],
};
