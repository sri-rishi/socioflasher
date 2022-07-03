/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl":  "1535px",
      // => @media (min-width: 1535px) { ... }

      "xl": "1279px",
      // => @media (min-width: 1279px) { ... }

      "lg": "1050px",
      // => @media (min-width: 1050px) { ... }

      "md": "580px",
      // => @media (min-width: 640px) { ... }

      "sm": "300px" ,
      // => @media (min-width: 300px) { ... }
    },
    extend: {
      boxShadow: {
        "top": "0px -1px 5px #888",
        "all": "0 0 20px #888"
      }
    },
  },
  plugins: [],
}
