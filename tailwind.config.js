// filepath: /tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#25B4D0',
          'custom-gray': '#1e1e1f',
          'custom-bg': '#f5f5f5',
        },
        textShadow: {
          'default': '0 2px 4px rgba(0,0,0,0.1)',
          'lg': '0 4px 8px rgba(0,0,0,0.20)',
          'xl': '0 8px 16px rgba(0,0,0,0.30)',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
    plugins: [],
    future: {
      hoverOnlyWhenSupported: true,
    },
    experimental: {
      optimizeUniversalDefaults: true
    }
  }