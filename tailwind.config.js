/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
    sm: '640px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    'red':'#8F1D21',
    'white':'#FFFFFF',
    'black':'#000000',
    'yellow':'#FFD345',
    'grey' : '#F6F6F6',
    'bisque' : '#ffe4c4',
    'white_blur':'#ffffffb3',
    'black_blur':'#000000de',
    'grey_over':'#808080bd',
    'grey_blur':'#d0c4c4ad',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    livvic:['livvic'],
  },
  extend: {
    width: {
      '1/10': '10%',
    },
    keyframes: {
      'modal': {
        '0%':  {top:"33%",left:"33%", opacity:'0' },
        '100%':{top:"33%",left:"33%" , opacity:'1'},
      },
    },
    
},
  },
  plugins: [],
}

