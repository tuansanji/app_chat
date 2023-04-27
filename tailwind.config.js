/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateAreas: {
        layout: `'h1 h1 h2 h3'
           'h4 h5 h2 h3'
           'h4 h5 h6 h6'`,
      },
      backgroundColor: {
        bg: `#1D1D24`,
      },
      colors: {
        active: `#2374E1`,
      },
    },
  },
  plugins: [],
};
