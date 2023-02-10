/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Bitter", "serif"],
        content: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        hero: 'url("https://picsum.photos/id/220/100/100")',
      },
      colors: {
        primary: {
          DEFAULT: "#204438",
          light: "#204438",
        },
        secondary: {
          DEFAULT: "#FFFFF0",
        },
        last: {
          DEFAULT: "#E1AA32",
        },
        texts: {
          DEFAULT: "#121712",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
