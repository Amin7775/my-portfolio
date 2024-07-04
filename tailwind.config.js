/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "custom-text-Sora" : '"Sora", sans-serif',
      },
      colors: {
        "custom_Dark" : "#282930",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}