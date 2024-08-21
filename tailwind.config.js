/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'buttonBlue':'linear-gradient(180deg,#977FFF,#6F4FFF);',
      },
      colors:{
        "mainBackground":"#0A061E",
        "borderMenu":"#353147",
        "titleMenu":"#DBD8E9",
        "hoverMenu":"#FFD88D",
        "bodyContent":"#27223E",
        "greetingText":"#7E7997",
        "notCompleted":"#FF5555",
        "Completed":"#51EC96"
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

