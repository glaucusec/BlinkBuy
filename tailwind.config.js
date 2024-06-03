/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],

  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      animation: {
        leftToRightSlide: "leftToRightSlide .3s ease",
        rightToLeftSlide: "rightToLeftSlide .3s ease-out",
      },
      keyframes: {
        leftToRightSlide: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        rightToLeftSlide: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      fontSize: {
        xxs: ["0.65rem", "14px"],
      },
      colors: {
        blinkblue: "#242f66",
        blinkSizeBtn: "#faf6e8",
        reviewStar: "#d8ba43",
      },
      screens: {
        "3xl": "1620px",
      },
    },
  },
};
