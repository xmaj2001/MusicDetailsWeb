/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/imgs/logo-trasp.png')",
        logo: "url('/src/assets/imgs/logo.jpeg')",
      }
    },
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              100: "red",
              200: "#ffe7b3",
              300: "#ffd480",
              400: "#ffc04d",
              500: "#ffad1a",
              600: "#e69900",
              700: "#b37700",
              800: "#805500",
              900: "#4d3300",
            }, 
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              100: "red",
              200: "#ffe7b3",
              300: "#ffd480",
              400: "#ffc04d",
              500: "#ffad1a",
              600: "#e69900",
              700: "#b37700",
              800: "#805500",
              900: "#4d3300",
            }, 
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};

