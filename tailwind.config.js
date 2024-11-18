/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // dark: '#1E293B',
        dark: '#121212',
        gunmetal: '#1c1c1c',
        secondary: '#64748b',
        navy:  '#001F3F' ,
        gold:  '#EAB308' ,
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}


