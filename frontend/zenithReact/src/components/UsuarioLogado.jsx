import React, { useState, useEffect } from 'react'
import Configuracoes from '../icons/Configuracoes';
import ConfiguracoesVerde from '../icons/ConfiguracoesVerde';
import { Link, useLocation } from 'react-router-dom'
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

  const Imagem = ({ foto }) => {
    const caminho = `/src/img/${foto}`;

    return (
      <img src={caminho} alt={foto} />
    );
  };
  return (
    <>
      <div className='fixed bottom-0'>
        <div className='w-full h-auto sm:w-full h-16 p-8 flex items-start justify-center 
          font-bold container mx-auto'>
          <div className='justify-start items-start sm:w-full h-full flex items-center justify-between'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-start wrap'>
              <div className='pb-2 sm:pb-0 w-full h-full flex items-center'>
                <div className='w-8 h-8 rounded-full float-left overflow-hidden'>
                  <Imagem foto={foto} />

                </div>

                <span className='hidden sm:block text-xl font-bold text-cinzaTexto pl-3 mr-3 float-left'>
                  {nome}
                </span>
              </div>

              <div className='flex items-center justify-start flex-col sm:flex-row pb-2 sm:pb-0 '>
                <Link to='/config'>
                  <button className='sm:ml-20 float-right'>
                    {location.pathname === "/config" ? <ConfiguracoesVerde /> : <Configuracoes />}
                  </button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

    </>

  )
}

export default UsuarioLogado