/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",

        orange: "#CB3B21",
        red: "#862C23",
        bege: "#F2924E",
        slime: "#E2E02B",
        pink: "#FC848A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
