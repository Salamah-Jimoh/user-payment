/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
       darkPurple: '#8a59a5',
      //  darkPurple: '#26294D',
       darkerPurple:'#1A3154',
       lightBlue: '#be9f61',
      //  lightBlue: '#4E6EF1',
       white:'#fff',
       purpleShade:'#505478',
       lightGray:'hsl(14, 25%, 72%)',
       lighterBlue:'#dcbe8b'
      }
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    }
  },
  plugins: [],
}

