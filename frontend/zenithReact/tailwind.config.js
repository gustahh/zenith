/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}", ],
  purge: {
    enabled: true,
    content: ['./src/**/*.jsx'], // Caminho para os arquivos de código-fonte
  },
  safelist: [
    'bg-verdeLimao', 
    'bg-verde', 
    'bg-rosa', 
    'bg-rosaClaro', 
    'bg-roxo', 
    'bg-lilás', 
    'bg-laranja', 
    'bg-bege',
    'bg-turquesa',
    'bg-azulGelo', 
    'hidden',
    'block',
    'scale-0',
    'scale-1',
  ],
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
        'chumbo': '#2E302E',
        'ice': '#FEFBF6',
        'branco': '#FEFBF6',
        'rosa': '#FB88B4',
        'rosaClaro': '#E1AFD1',
        'roxo': '#7469B6',
        'lilás': '#9195F6',
        'laranja': '#F6995C',
        'bege': '#EADFB4',
        'turquesa': '#51829B',
        'azulGelo': '#B7C9F2'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

