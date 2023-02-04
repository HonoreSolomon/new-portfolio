/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
