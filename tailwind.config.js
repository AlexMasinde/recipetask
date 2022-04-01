const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "#FFF1F1",
        main: "#FFE1E1",
        dark: "#FB693C",
      },
      gray: colors.gray,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
