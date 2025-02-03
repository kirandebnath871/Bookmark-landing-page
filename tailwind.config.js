/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
      },
    },
  },
  plugins: [],
};
