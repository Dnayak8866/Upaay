/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:'#04B888',
        secondary:'#21577A',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

