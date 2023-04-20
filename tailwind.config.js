/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        "my-theme": {
          primary: "#ff0000",
          secondry: "#f6d860",
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
    },
  },
  plugins: [require("daisyui")],
};
