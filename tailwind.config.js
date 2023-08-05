/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        "my-theme": {
          bgColor: "#1f1f1f",
          primary: "#42f1b7",
          secondary: "#f6d860",
          accent: "#bbb",
          neutral: "#fff",
          "base-100": "#1f1f1f",
        },
      },
      
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      // colors: {
      //   primary: "#42f1b7",
      //   secondary: "#f6d860",
      //   accent: "#bbb",
      //   neutral: "#fff",
      //   "base-100": "#1f1f1f",
      // },

    },
  },
  plugins: [require("daisyui")],
};
