/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "webwave-blue": "#00C0FF",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        md: "960px",
        "3xl": "1600px",
      },
    },
  },
};
