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
        },

        dark: {
          100: '#8b97c6', //periwinkle - dark theme text color
          200: '#252a41', //medium navy - dark theme card bg
          300: '#1f212e', //deep navy - dark theme top bg
          400: '#1e202a', //dark navy - dark theme bg
        },

        toggle: {
          blue: '#378fe6',
          green: '#3eda82',
          grey: '#aeb3cb',
        },

        borderColor: {
          'yellow-pink': "linear-gradient(to right,  #fdc468 , #df4996);"
        }
      },
    },
    backgroundImage: {
      'split-white-grey': "linear-gradient(to top,  white 80% , #f5f7ff 20%);",
      //'yellow-pink': "linear-gradient(to right,  #fdc468 , #df4996);"
    },
    container: {
      center: true,
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
