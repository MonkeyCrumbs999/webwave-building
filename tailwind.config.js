module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class", // moved from theme.extend to here
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
  variants: {
    extend: {
      backgroundColor: ["dark"], // add this
      borderColor: ["dark"], // and other properties as you need
      textColor: ["dark"], // add this
    },
  },
};
