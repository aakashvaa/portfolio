/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       animation : {
          "spin-slow" : "spin 3s linear infinite" 
       }, 
      transitionDuration: {
        2000: "2000ms", // Custom 3-second duration
      },
      fontFamily: {
        jersey: ["Jersey 25", "sans-serif"],
        lobster: ["Lobster Two", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        abel: ["Abel", "sans-serif"],
        prime: ["Courier Prime", "Courier New", "monospace"],
      },
      colors: {
        "bl-primary": "#212121 ",
        "bl-secondary": "#33332d",
      },
    },
    screens: {
      xs: "800px",
      sm: "1060px",
      md: "1200px",
      lg: "1600px",
    },
  },
  plugins: [],
};
