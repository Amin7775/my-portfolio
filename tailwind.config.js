/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-text-Sora": '"Sora", sans-serif',
      },
      colors: {
        custom_Dark: "#282930",
        "theme-primary": "#8750f7",
        "theme-secondary": "#2a1454",
        "heading-primary": "#102039",
        "theme-accent": "#140c1c",
        "off-white": "#f6f3fc",
        "grey-2": "#d9d9d9",
      },
    },
  },
  plugins: [require("daisyui")],
};
