/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-light': '#ffffff',
        'fg-light': '#0b1220',
        'bg-dark': '#0c0f14',
        'fg-dark': '#e9eefb',
        'primary-light': '#f5d0fe',
        'primary-dark': '#5b0a7d',
        'accent': '#9b5de5',
        'accent-hover': '#f15bb5'
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}