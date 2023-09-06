const colors = require('tailwindcss/colors')
module.exports = {
    content: ["./src/**/*.js", "./*.html"],
    theme: {
      extend: {},
      colors: {
        greenish: '#d5ff40',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
      },
    },
    plugins: [],
  }