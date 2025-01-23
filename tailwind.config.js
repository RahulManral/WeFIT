/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',    // Custom screen size for XS
        '4xl': '1920px',  // Custom screen size for 4XL
        '5xl': '2560px',  // Custom screen size for 5XL
      },
      height: {
        'custom-height-lg': '525px',
        'custom-height-2xl': '720px'
      },
      fontFamily:{
        custom: ['Fredoka', 'serif']  ,
      },
    },
  },
  plugins: [],
  
}

