
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // you can either spread `colors` to apply all the colors
      ...colors,
    },
  },
  plugins: [],
};
