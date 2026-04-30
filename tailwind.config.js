/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bodylife: {
          cream: "#eee6da",
          paper: "#f7f2e9",
          ink: "#242620",
          muted: "#67645c",
          green: "#174f3d",
          line: "#ded6c8"
        }
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};
