/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgdrop': 'rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'sm': {'max': '639px'},
      },
    }
  },
  plugins: [],
}

