/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bl-primary': '#212121 ',
        'bl-secondary': '#33332d',
      },
    },
    screens: {
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1300,
    },
  },
  plugins: [],
}
