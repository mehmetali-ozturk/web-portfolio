module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#25B4D0',
      },
      textShadow: {
        'default': '0 2px 4px rgba(0,0,0,0.1)',
        'lg': '0 4px 8px rgba(0,0,0,0.20)',
        'xl': '0 8px 16px rgba(0,0,0,0.30)',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow').default
  ]
}

