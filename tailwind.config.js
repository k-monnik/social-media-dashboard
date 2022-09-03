//const colors = require("tailwindcss/colors")


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        lime: '#1db489',
        red: '#dc414c',
        medGrey: '#848BAB',
        solidGrey: '#63687D',

        social: {
          blue: '#198ff5', //fb blue
          bluebird: '#1ca0f2', //twitter blue
          red: '#c4032a', //youtube red
          yellow: '#fdc468', //ig yellow
          pink: '#df4996', //ig pink
          'yellow-pink': ['#fdc468', '#df4996'],
          //sunset: "linear-gradient(to right,  #fdc468 , #df4996);"

        },

        light: {
          100: '#f5f7ff',  //barely there, almost white, palest blue - top bg
          200: '#f0f2fa', //still barely there, super pale blue - card bg
          300: '#636363', //medium grey - light theme text color
          400: '#1e202a', //deep navy - light theme text color
          500: '#E1E4F0', // light theme card bg hover
        },

        dark: {
          100: '#8b97c6', //periwinkle - dark theme text color
          200: '#252a41', //medium navy - dark theme card bg
          300: '#1f212e', //deep navy - dark theme top bg
          400: '#1e202a', //dark navy - dark theme bg
          500: '#333A55', //dark theme card bg hover
        },

        toggle: {
          blue: '#378fe6',
          green: '#3eda82',
          grey: '#aeb3cb',
          navy: '#252B42',
        },

        borderColor: {
          'yellow-pink': "linear-gradient(to right,  #fdc468 , #df4996);"
        }
      },
      spacing: {
        '4.5': '1.125rem',
        '76': '19rem',
      },
      inset: {
        '0.75': '0.1875rem',
      }
    },

    container: {
      center: true,
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },

  },
  variants: {
    backgroundColor: ['checked'],
    extend: {

    },
  },
  plugins: [],
}
