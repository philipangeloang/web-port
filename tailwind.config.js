/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        dmsans: "DM Serif Display",
      },
      colors: {
        "main-blue": "#2465E4",
        "main-violet": "#6069EB",
      },
    },
  },
  plugins: [],
};
