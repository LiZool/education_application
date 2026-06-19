/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['"Fredoka"', 'sans-serif'],
        fun: ['"Baloo 2"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

