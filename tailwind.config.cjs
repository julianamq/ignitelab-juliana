/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    // geralmente trabalha com nomenclatura 
    fontSize:{
      xs:14,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      xxl:32,
    },
    colors:{
      transparent:'transparent',
      'black':'#000000',
      'white':'#ffffff',
      gray:{
        900:'121214',
        800:'#202024',
        400:'#7C7C8A',
        200:'#c4c4cc',
        100:'#E1E1E6',
      },
      blue:{
        100:'#61DAFB' ,
        200:'#45b5c4',
        300:'#c7ede8',

      },    
      
    },
    extend: {
      fontFamily:{
        sans:'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
