/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily:{
      abc:["Roboto Condensed","sans-serif"],
      Rubik:["Rubik","sans-serif"],
      Mulish: ['Mulish', 'sans-serif']
    },
    colors:{
      current: 'currentColor',
      green:"#7AC751",
      white: "#fff",
      gray:"#F7F8FA",
      gray2:"#E3E3E3",
      ctext:"#555555",
      ctext2:"rgba(81, 81, 81, 0.71)",
      c3:"#C2C2C2",
      blue:"#00B7F1"
    }
  },
  plugins: [],
}