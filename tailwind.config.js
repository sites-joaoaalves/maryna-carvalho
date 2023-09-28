/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin"), require("daisyui")],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#ECD574",
        secondary: "#81743E",
        "bkg-primary": "#000000",
        "bkg-secondary": "#FFFFFF",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      didone: ["Antic Didone", "serif"],
    },
  },
};
