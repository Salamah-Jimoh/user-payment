/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
       darkPurple: '#26294D',
       darkerPurple:'#1A3154',
       lightBlue: '#4E6EF1',
       white:'#fff',
       purpleShade:'#505478',
       lightGray:'hsl(14, 25%, 72%)',
       lighterBlue:'rgba(78, 110, 241, 0.8)'
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

