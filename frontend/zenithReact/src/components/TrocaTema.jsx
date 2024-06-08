import React from 'react'

function TrocaTema() {
  return (
    <select name="trocatema" className='p-0 m-3 flex w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'>
      <option value="">Modo Claro</option>
      <option value="M">Modo Escuro</option>
    </select>
  )
}

export default TrocaTema