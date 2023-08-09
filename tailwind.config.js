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
        lighterMain2: "#00ab88",
        lighterMain3: "#00b378",
        mainColorGradientTint1Background: "#1a2d35",
        benefitsDark: "#022b3b",
        benefitsDarkRgba: "rgba(2, 43, 59, 0.35)",
        benefitsMedium: "#02394f",
        benefitsLighter: "#044862",
        benefitsLightest: "#2f7182",
        secondMainColor: "#02222e",
      },
      textColor: {
        lighterMainText: "#258B76",
        lightGray: "#4e595d",
        headerColor: "#00ab88",
        almostWhite: "#f9f9f9",
        textLightestMain: "#00ffab",
        textLightestMain2: "#00e69a",
      },
      borderWidth: {
        borderSmallest: "0.5px",
      },
      borderColor: {
        borderGray: "#9a9c9c",
        borderLighterMainText: "#258B76",
        borderLightestMain: "#00ffab",
        borderLightestMainBluish: "#00667a",
        borderLightestMainBluish2: "#4d94a2",
        borderLighterMain1: "#00ab88",
      },
      gradientColorStops: {
        ligterGrayGradient: "#9a9c9c",
        mainColorGradient: "#01161e",
        mainColorGradientTint1: "#1a2d35",
        mainColorGradientTint2: "#34454b",
        roundedBorderColor1: "#01bce1",
        roundedBorderColor2: "#10215b",
        roundedBorderColor3: "#08ddb5",
        roundedBorderColor4: "#366d81",
        cardServiceBg1: "#084b3f",
        cardServiceBg2: "#27a58c",
        benefitsMediumGr: "#02394f",
        benefitsLighterGr: "#044862",
        benefitsLightestGr: "#2f7182",
        faq1: "#074737",
        faq2: "#0C6051",
        faq3: "#157460",
        faq4: "#30947F",
        faq5: "#24A88E",
      },
      boxShadow: {
        bottom: "0 8px 40px -2px",
        bottomHeavy: "0 10px 16px -2px",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
