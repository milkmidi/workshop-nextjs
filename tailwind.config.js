/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ['animate-spin'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    data: {
      active: 'active~="true"', // data-active="true"
    },
    extend: {},
  },
  plugins: [],
};
