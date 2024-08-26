import React from 'react';
import { Link } from 'react-router-dom';
import CriarAnotacao from './CriarAnotacao';
import GridArquivadas from '../../components/Anotacoes/GridArquivadas';
import Reflexao from '../../components/Anotacoes/Reflexao';
import ArquivarCheio from '../../icons/ArquivarCheio';

const Arquivadas: React.FC = () => {
  return (
    <>
      <Reflexao />
      <div className='w-full h-auto flex items-center justify-between pb-2'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Anotações arquivadas</div>
        <div className='flex'>
          <button className='w-8 h-8 hover:bg-white/20 rounded-md flex items-center justify-center mr-2'>
            <Link to='/anotacoes'>
              <ArquivarCheio fill="#999999" />
            </Link>
          </button>
          <CriarAnotacao />
        </div>
      </div>
      <GridArquivadas />
    </>
  );
};

export default Arquivadas;
