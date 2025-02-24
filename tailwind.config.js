/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rojo: '#E53538',
        azul: '#092A4D'
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', 'sans-serif'],
        Ubuntu: ['"Ubuntu"', 'sans-serif'],
        Ibrand: ['"Ibrand"', 'sans-serif'],
        K2D: ['"K2D"', 'sans-serif']
      }
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
  ],
};
