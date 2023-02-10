/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily': {
        'title': ['Bitter', 'serif'],
        'content': ['Nunito Sans', 'sans-serif'],
      } 
    },
  },
  plugins: [],
}
