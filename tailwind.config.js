/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#075985",
        bluer: "#10273E",
        bluest: "#133350",
      },
      fontFamily: {
        text_font: "Quicksand",
      },
    },
  },
  plugins: [],
};
