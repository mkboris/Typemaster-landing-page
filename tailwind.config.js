/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "thick-orange": "#F16718",
      "light-orange": "#FF9B62",
      "dark-blue": "#162542",
      "grayish-blue": "#7B8BAD",
      "light-grayish-blue": "#E8EFF2",
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
