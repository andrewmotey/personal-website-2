/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#6c757d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      textColor: {
        primary: '#0070f3',
      },
      borderColor: {
        primary: '#0070f3',
      },
      ringColor: {
        primary: '#0070f3',
      },
    },
  },
  plugins: [],
} 