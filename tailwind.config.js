/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'md': '2rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
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