/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./besoin1/index.html",
    "./besoin2/index.html",
    "./besoin3/**/*.html",
    "./besoin1/**/*.{js,jsx,ts,tsx}",
    "./besoin2/**/*.{js,jsx,ts,tsx}",
    "./besoin3/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
