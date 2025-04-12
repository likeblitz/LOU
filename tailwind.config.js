/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#A4C639',
          lightGreen: '#CFD989',
          hoverGreen: '#B8DA4D',
        },
        secondary: {
          brown: '#D2A679',
          lightBrown: '#E5C4A1',
          darkBrown: '#3E2F23',
        },
      },
      animation: {
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-button': 'bounce-button 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};