/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rojo: '#E53538',
        azul: '#092A4D',
        azul_oscuro: {
          900: '#192C4A',
          800: '#214987',
          700: '#5377B0', 
        },
        gris: {
          700: '#353535',
          600: '#616161',
          500: '#595959',
          200: '#D9D9D9'
        }
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
