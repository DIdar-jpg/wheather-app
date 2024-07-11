/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm': '620px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
        '2xl': '8rem',
      },
    },
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {
      colors: {
        'orange': '#eb6e4b',
        'black': '#48484a',
      },
    },
  },
  plugins: [],
}