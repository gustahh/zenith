import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Configuracoes: React.FC = () => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Use window.location.reload() em vez de location.reload()
  };

  const index = location.pathname === "/config" ? 'z-20' : 'z-0';

  return (
    <div className={`${index} w-screen h-screen absolute sm:relative sm:w-[50%] h-screen bg-branco dark:bg-cinzaEscuro sm:p-5 float-left`}>
      <span className='text-xl font-bold text-cinzaTexto pb-3'>Configurações</span>
      <ul>
        <Link to='/config/suaconta'>
          <li className='border-y-2 border-cinzaTexto/10 p-4'>
            <span className='text-xl font-bold text-cinzaTexto pb-3'>Sua conta</span>
          </li>
        </Link>
        <Link to='/config/privacidadeconta'>
          <li className='border-y-2 border-cinzaTexto/10 p-4'>
            <span className='text-xl font-bold text-cinzaTexto pb-3'>Privacidade e Segurança</span>
          </li>
        </Link>
        <Link to='/config/aparencia'>
          <li className='border-y-2 border-cinzaTexto/10 p-4'>
            <span className='text-xl font-bold text-cinzaTexto pb-3'>Aparência</span>
          </li>
        </Link>
        <button onClick={handleLogout} className='w-full'>
          <li className='border-y-2 border-cinzaTexto/10 p-4 cursor-pointer'>
            <span className='text-xl font-bold text-red-500 pb-3'>Sair</span>
          </li>
        </button>
      </ul>
    </div>
  );
};

export default Configuracoes;
