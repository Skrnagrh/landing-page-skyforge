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
        // primary: '#14b8a6',
        // dark: '#1A1A19',
        secondary: '#64748b',
        // charcoal: '#2D2D2D',
        // gunmetal:'#1F2933' ,
        // onyx :'#121212' ,
        beige:  '#F3F3E0' ,
        navy:  '#001F3F ' ,
        // blue:  '#608BC1 ' ,
        sea:  '#608BC1 ' ,
        cold:  '#CBDCEB ' ,

      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}


