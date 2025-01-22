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
        '6xl': '3840px',  // Custom screen size for 6XL
        '7xl': '5120px',  // Custom screen size for 7XL
        '8xl': '7680px',  // Custom screen size for 8XL
        '9xl': '10240px', // Custom screen size for 9XL
        '10xl': '15360px', // Custom screen size for 10XL
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

