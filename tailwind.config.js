/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'480px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
        

      },
      boxShadow:{
        '5xl':'20px 20px 50px rgba(0,0,0,0.5)',
      },
      inset:{
        '17':'68px',
        '15':'60px'
      }
    },
    fontFamily:{
      lora:["Lora","serif"],
      mono1:["DM Mono","cursive"],
      ShareT:["ShareTech","Mono"],
      Railway:["Raleway"],
      Heading:["Suisse Intl,sans-serif"]
    }
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
