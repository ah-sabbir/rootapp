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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      myColor:{
        leftSide:'#122330',
        upSide:'#152937'
      },
      white:{
        light:'#fff'
      },
      a_hover:{
        bg:'#0E4351'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}