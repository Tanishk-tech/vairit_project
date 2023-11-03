/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    'red':'#8F1D21',
    'white':'#FFFFFF',
    'yellow':'#FFD345',
    'grey' : '#F6F6F6',
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
    
},
  },
  plugins: [],
}

