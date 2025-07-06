/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         montserrat: ['Montserrat', 'sans-serif'],
         inter: ['Inter', 'sans-serif'],
         mina: ['Mina', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

