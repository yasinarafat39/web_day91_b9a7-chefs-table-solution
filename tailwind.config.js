/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0BE58A",
        secondary: "#150B2B", 
      },
      fontFamily: {
        Lexend: '"Lexend", sans-serif',
      },
      spacing: {
        max_width: "1600px",
        content_width: "1320px",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}