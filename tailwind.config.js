module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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