/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07D68B",
        "primary-500": "#0A0E11",
        "secondary-200": "#FFFFFF99",
        "secondary-300": "#747474",
        "secondary-500": "#FFFFFF33",
      },
      backgroundImage: {
        hero: "url('./assets/bg_hero.png')",
      },
      fontFamily: {
        calibri: ["Calibri", "sans-serif"],
      },
      content: {
        evolvetext: "url('./src/assets/EvolveText.png')",
        abstractwaves: "url('./src/assets/AbstractWaves.png')",
        sparkles: "url('./src/assets/Sparkles.png')",
        cirlces: "url('./src/assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
