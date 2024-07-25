/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D343A",
        lightprimary: "#D5D6D8",
        darkgold: "#876A47",
      },
    },
  },
  plugins: [],
};
