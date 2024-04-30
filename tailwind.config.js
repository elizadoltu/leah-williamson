/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'background' : 'var(--background-colour)',
        'font' : 'var(--font-colour)'
      },
      fontFamily : {
        'apercu' : ['Apercu Bold'],
        'urbanist' : ['Urbanist'],
        'apercu-bold' : ['Apercu Bold Italic']
      }
    },
  },
  plugins: [],
}

