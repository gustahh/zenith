import React, { useState, useEffect } from 'react'

function TrocaTema() {

  function BuscaTema() {
    const buscarTema = localStorage.getItem('tema');

    if (buscarTema === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  


  useEffect(() => {
    BuscaTema();
  }, []);

  return (
    <select name="trocatema" className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto' onClick={}>
      <option value="light">Modo Claro</option>
      <option value="dark" >Modo Escuro</option>
    </select>
  )
}


export default TrocaTema