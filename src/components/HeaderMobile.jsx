import React, { useState, useEffect } from 'react'
import Configuracoes from '../icons/Configuracoes';
import ConfiguracoesVerde from '../icons/ConfiguracoesVerde';
import { Link, useLocation } from 'react-router-dom'
import Logout from '../icons/Logout';
import axios from 'axios';
import User from '../img/user.png';

function HeaderMobile() {
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
    <div className='block sm:hidden w-screen h-auto bg-ice dark:bg-cinza shadow-lg float-left flex items-center justify-end pr-5 pt-2'>
      <div className='justify-start items-start sm:w-full h-full flex items-center justify-center'>
        <div className='w-full flex flex-row sm:flex-row items-center justify-start wrap'>
          <div className='pb-2 sm:pb-0 w-full h-full flex items-center'>
            <div className='w-5 h-5 rounded-full float-left overflow-hidden'>
              <Link to='/config'>
                <Imagem foto={foto} />
              </Link>
            </div>

            <span className='hidden sm:block text-xl font-bold text-cinzaTexto pl-3 mr-3 float-left'>
              {nome}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeaderMobile