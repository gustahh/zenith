/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}", ],
  theme: {
    extend: {
      colors: {
        'verdeLimao' : '#D8E9A8',
        'verde': '#4E9F3D',
        'verdeEscuro': '#1E5128',
        'cinzaEscuro': '#191A19',
        'cinza': '#191919',
        'cinzaTexto': '#999999',
        'preto': '#000000',
        'ice': '#FEFBF6',
        'branco': '#FEFBF6' 
      }
    },
  },
  plugins: [],
}

