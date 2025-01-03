/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
  'cream':'rgb(255, 21, 0)',
  'white': '#ffffff',
  'black':'#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'slate':'#f1f5f9',
      'red':'#dc2626',
    },
    extend: {},
  },
  plugins: [],
}