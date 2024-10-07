/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient": "linear-gradient(94deg, #0AAF01 39%, #82BD3B 100%)",
      },
      backgroundImageButton: {
        "custom-gradient": "linear-gradient(158deg, #09B300 0%, #87C33F 100%)",
      },
    },
  },
  plugins: [],
};
