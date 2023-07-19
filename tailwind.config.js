/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    colors: {
      yellow: "#feca57",
      red: "#ee5253",
      "red-light": "#ff6b6b",
      navy: "#341f97",
      "sky-blue": "#2e86de",
      black: "#222f3e",
      grey: "#e0e0e0",
      white: "#fff",
      logo: "antiquewhite",
    },
    spacing: {
      0: "0px",
      1: "5px",
      2: "10px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      8: "32px",
      65: "65px",
      80: "80px",
      100: "100px",
      120: "120px",
      150: "150px",
      200: "200px",
      300: "300px",
      500: "500px",
      600: "600px",
      xl: "20px",
    },
    gridTemplateColumns: {
      22: "repeat(2, 1fr)",
    },
    extend: {},
  },
  plugins: [],
};
