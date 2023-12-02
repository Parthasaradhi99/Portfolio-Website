/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        kaushan : ["Kaushan Script", "cursive"]
      },
      colors: {
        matte_black: "hsl(0, 0%, 8%)",
        mint_jelly: "hsl(153, 71%, 59%)",
        verified_black: "hsl(0, 0%, 14%)",
        silver_shadow: "hsl(0, 0%, 85%)",
        snow_white: "hsl(0, 0%, 100%)",
        grapefruit_pulp: "hsl(7, 100%, 68%)",
      },
    },
  },
  plugins: [],
};
