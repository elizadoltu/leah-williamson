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
      },
      fontSize : {
        '10xl' : '200px',
        '12xl' : '210px',
        '14xl' : '400px'
      },
      spacing : {
        '128' : '500px',
        '20rem' : '100%',
        '256' : '450px',
        '512' : '1000px',
        '400' : '400px'
      },
      height : {
        '1px' : '1px',
        '1200' : '1400px'
      },
      width : {
        '1200' : '1400px',
        '20rem' : '32rem',
        '25' : '800px'
      }
    },
  },
  experimental : {
    applyComplexClasses : true,
  },
  plugins: [],
}

