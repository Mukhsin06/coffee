/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F15A29',
        black: '#070707',
        gray: '#F3F3F3'
      }
    },
    screens: {
      'sm' : '0px',
      'md' : '620px',
      'lg' : '778px',
      'xl' : '1120px',
      '2xl' : '1380px'
    }
  },
  plugins: [],
}