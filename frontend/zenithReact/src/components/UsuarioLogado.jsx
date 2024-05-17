import React, { useState, useEffect } from 'react'
import Configuracoes from '../icons/Configuracoes';
import Logout from '../icons/Logout';
import axios from 'axios'


function UsuarioLogado() {
    const [nome, setNome] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:3000/perfil')
          .then((res) => {
              setNome(res.data.results[0].nome);
          });
  }, []);

  function BotaoLogout(){
    localStorage.removeItem('token');
    location.reload();



  }
  return (
        <div className='w-full h-16 p-3 flex items-center justify-center 
          font-bold container mx-auto'>
        <div className='w-full h-full flex items-center justify-stretch'>
          <div>
            <div className='w-12 h-12 bg-black rounded-full float-left'></div>
          </div>

          <div>
            <span className='text-xl font-bold text-cinzaTexto pl-3 float-left'>
              {nome}
            </span>
          </div>

          <button className='ml-20 float-right'>
            <Configuracoes className="" />
          </button>

          <button className='ml-3 float-right' onClick={BotaoLogout}>
            <Logout className="" />
          </button>
        </div>
      </div>
  )
}

export default UsuarioLogado