/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#A41F13",   // Fresh Red
        secondary: "#A41F13",
        accent: "#A41F13",
        neutral: "#292F36",   // Carbon Gray
        base100: "#292F36", 
        light: "#FAF5F1",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A41F13",
          secondary: "#A41F13",
          accent: "#A41F13",
          neutral: "#292F36",
          "base-100": "#292F36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
