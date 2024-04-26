/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#964B00',
        'brownLight': '#C4A484',
        'brownDark': '#5C4033'

      },
    },
  },
  plugins: [],
}

