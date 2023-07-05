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
        primary: "#9215f1",
        hLight: "#B5B5B563",
        dark: "#0B0B22",
        light: "#FFFFFF",
        hDark: "#ffffff2e",
      },
      backgroundImage: {
        lightHeading:
          "radial-gradient(123.44% 123.44% at 56.63% 100%, #ececee 6.77%, rgba(255, 255, 255, 0.45) 100%)",
        darkHeading:
          "radial-gradient(123.44% 123.44% at 56.63% 100%, #0B0B22 6.77%, #0B0B22 30%)",
      },
    },
  },
  plugins: [],
};
