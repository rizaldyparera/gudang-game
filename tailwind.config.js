/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'montserrat' : 'Montserrat',
      },
      colors: {
        'background-color' : '#2A2438',
        'background-hover' : '#352F44',
        'primary-color' : '#DBD8E3',
        'secondary-color' : '#639CD9',
        'gray-color' : '#9E9E9E',
        'hover-color' : '#578BC1',
        'card-color' : '#E3E3E3',
      },
      screens: {
        'sm': '530px',
        'md': '801px',
        'xl': '1280px',
        
      },
    },
  },
  plugins: [],
}
