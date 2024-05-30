/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'homeimg': "url('/src/images/hero/hero-1.jpg')",
        'aboutimg': "url('/src/images/about-us.jpg')"
      }

    },
  },
  plugins: [],
});

