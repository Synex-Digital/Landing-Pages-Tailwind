/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient": "linear-gradient(94deg, #0AAF01 39%, #82BD3B 100%)",
      },
    },
  },
  plugins: [],
};
