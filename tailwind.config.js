const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
          fontFamily: {
            Qahiri: ['Qahiri-Regular', ...defaultTheme.fontFamily.sans],
          },
          keyframes: {
            blinker: {
                // '0%':{
                //   opacity: 100
                // },
                // '50%': {
                //   opacity: 0
                // }
                '100%': {
                  opacity: 0
                },
            }
        },
        animation: {
            blinker: 'blinker 0.500s linear infinite',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}