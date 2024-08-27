/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bungee: ["Bungee Tint", "sans-serif"],
        nerko: ["Nerko One", "cursive"],
        amsterdam: ["New Amsterdam", "sans-serif"],
        dmserif: ["DM Serif Text", "serif"],
      },
    },
  },
  plugins: [],
};
