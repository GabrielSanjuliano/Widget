const tailwindcss = require("tailwindcss");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          200: "#b2dfdb",
          300: "#4db6ac",
          500: "#009688",
          600: "#00796b",
          700: "#004d40",
        },
        surface: {
          100: '#FFFFFF',
          200: '#F4F4F5',
          300: '#E4E4E7',
          400: '#D4D4D8',
        },
        tooltip: {
          900: '#27272A',
        },
        tx: {
          900:'#27272A',
          800: '#71717A',
          700: '#72727F',
          100: '#F4F4F5',
        },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [require("tailwind-scrollbar")],
};
