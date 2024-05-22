import React, { useState, useEffect } from 'react'
import Configuracoes from '../icons/Configuracoes';
import Logout from '../icons/Logout';
import axios from 'axios';
import User from '../img/user.png';

function UsuarioLogado() {
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:3000/perfil')
      .then((res) => {
        setNome(res.data.results[0].nome);
        setFoto(res.data.results[0].foto_perfil);
      });
  }, []);

  function BotaoLogout() {
    localStorage.removeItem('token');
    location.reload();
  }

  const Imagem = ({ foto }) => {
    const caminho = `/src/img/${foto}`;

    return (
      <img src={caminho} alt={foto} />
    );
  };
  return (
    <div className='h-auto sm:w-full h-16 p-3 flex items-start justify-center 
          font-bold container mx-auto'>
      <div className='justify-start items-start sm:w-full h-full flex items-center justify-between'>
        <div className='w-full flex items-center justify-start'>
          <div className='w-full h-full flex items-center'>
            <div className='h-10 w-10 sm:w-8 h-8 rounded-full float-left overflow-hidden'>
              <Imagem foto={foto}/>
              
            </div>

            <span className='hidden sm:block text-xl font-bold text-cinzaTexto pl-3 mr-3 float-left'>
              {nome}
            </span>
          </div>

          <div className='flex items-center justify-start'>
            <button className='sm:ml-20 float-right'>
              <Configuracoes className="" />
            </button>

            <button className='float-right flex items-center' onClick={BotaoLogout}>
              <Logout className="pr-2" />
              <span className='hidden sm:block text-red-500'>Sair</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UsuarioLogado