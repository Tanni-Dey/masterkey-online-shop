/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Podkova', 'serif'],
    },
    colors:{
      'green':'38FF4C',
      'black':'#000000',
      'white':' #FFFFFF'
    },
    fontSize: {
      sm: '16px',
      md: '20px',
      xl: '22px',
      xl2: '28px',
      xl3: '36px',
    },
    extend: {},
  },
  plugins: [],
}
