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
        backgroundSections: "#e6e8e9",
        lighterMain: "#258B76",
        mainColorGradientTint1Background: "#1a2d35",
        benefitsDark: "#022b3b",
        benefitsMedium: "#02394f",
        benefitsLighter: "#044862",
      },
      textColor: {
        lighterMainText: "#258B76",
        lightGray: "#4e595d",
        headerColor: "#02394F",
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
        roundedBorderColor1: "#258B76",
        roundedBorderColor2: "#044862",
        roundedBorderColor3: "#0CC0DF",
      },
    },
  },
  plugins: [],
};
