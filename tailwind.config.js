/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        titleSmall: "24px",
        titleBase: "36px",
        titleMed: "56px",
      },
      fontFamily: {
        title: ["Bitter", "serif"],
        content: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        hero: 'url("https://picsum.photos/id/220/100/100")',
      },
      aspectRatio: {
        "4/3": "4 / 3",
        card: "1.625",
        "card-vertical": "0.6154",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      colors: {
        primary: {
          DEFAULT: "#204438",
          light: "#204438",
        },
        secondary: {
          DEFAULT: "#FFFFF0",
        },
        accent: {
          DEFAULT: "#E1AA32",
        },
        tertiary: {
          DEFAULT: "#121712",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
