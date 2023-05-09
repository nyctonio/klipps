/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Work Sans'", 'sans-serif'],
      },
      colors: {
        primary: '#fdf7f2',
        'primary-pink': '#f4d2eb',
        'primary-green': '#52784f',
      },
    },
  },
  plugins: [],
};
