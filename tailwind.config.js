/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms', // Custom 3-second duration
      },
      fontFamily: {
        jersey: ['Jersey 25', 'sans-serif'],
        lobster: ['Lobster Two', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        abel: ['Abel', 'sans-serif'],
      },
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
