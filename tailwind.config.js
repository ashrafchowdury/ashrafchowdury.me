/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "720px",
        lg: "1024px",
        xl: "1450px",
      },
      colors: {
        primary: "#3794E3",
        hLight: "#E0E0E0",
        dark: "#1B2430",
        light: "#FFFFFF",
        hDark: "#253345",
      },
    },
  },
  plugins: [],
};
