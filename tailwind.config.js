/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      nunito: ["Nunito", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
