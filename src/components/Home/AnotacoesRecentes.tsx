import React from 'react';
import { Link } from 'react-router-dom';
import GridHome from './GridHome';

const Anotacoes: React.FC = () => {
  return (
    <>
      <div className='w-full h-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Últimas anotações</div>
        <Link 
          to={`/anotacoes`} 
          className='font-bold text-cinzaTexto py-2 justify-self-start 
          hover:text-verde hover:underline'
        >
          Ver tudo
        </Link>
      </div>
      <GridHome />
    </>
  );
};

export default Anotacoes;
