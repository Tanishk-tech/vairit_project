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
    'red':'	#8B0000',
    'white':'#FFFFFF',
    'yellow':'#D4AF37	',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    width: {
      '1/10': '10%',
    },
    
},
  },
  plugins: [],
}

