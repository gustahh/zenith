import React, { useState, useEffect } from 'react'

function TrocaTema() {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const handleSelectChange = (event) => {
    setOpcaoSelecionada(event.target.value);

    window.location.reload();
  };
  if (opcaoSelecionada === 'dark') {
    localStorage.setItem('tema', opcaoSelecionada);
  } else if (opcaoSelecionada === 'light') {
    localStorage.setItem('tema', opcaoSelecionada);
  }
  

  let selecionado = localStorage.getItem('tema');
  return (
    <select value={selecionado} onChange={handleSelectChange} name="trocatema" className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'  >
      <option value="light">Claro</option>
      <option value="dark" >Escuro</option>
    </select>
  )
}


export default TrocaTema