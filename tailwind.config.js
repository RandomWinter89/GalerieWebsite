/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "heebo": ["Heebo"],
        "cinzel": ["Cincel"],
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}

