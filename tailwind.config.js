/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        heebo: ["Heebo", "cursive"],
        cinzel: ["Cinzel", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        mainColor: "#01161e",
        lighterMain: "#03b430",
      },
      textColor: {
        lighterMainText: "#03b430",
        lightGray: "#4e595d",
      },
      borderWidth: {
        borderSmallest: "0.5px",
      },
      borderColor: {
        borderGray: "#9a9c9c",
      },
      gradientColorStops: {
        ligterGrayGradient: "#9a9c9c",
        mainColorGradient: "#01161e",
        mainColorGradientTint1: "#1a2d35",
        mainColorGradientTint2: "#34454b",
      },
    },
  },
  plugins: [],
};
