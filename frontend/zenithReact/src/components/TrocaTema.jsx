import React, { useState, useEffect } from 'react'

function TrocaTema() {

  

  return (
    <select name="trocatema" className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'>
      <option value="light">Modo Claro</option>
      <option value="dark" >Modo Escuro</option>
    </select>
  )
}


export default TrocaTema