import React from 'react';
import { Link } from 'react-router-dom';
import CriarAnotacao from './CriarAnotacao';
import Grid from '../components/Anotacoes/Grid';
import GridFixadas from '../components/Anotacoes/GridFixadas';
import Reflexao from '../components/Anotacoes/Reflexao';
import Arquivar from '../icons/Arquivar';

function Anotacoes() {

  return (
    <>
      <Reflexao />
      <div className='w-full h-auto flex items-center justify-between pb-2'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Anotações</div>
        <div className='flex'>
          <button className='w-8 h-8 hover:bg-white/20 rounded-md flex items-center justify-center mr-2'>
            <Link to='arquivadas'>
              <Arquivar stroke="#999999" />
            </Link>
          </button>
          <CriarAnotacao />
        </div>

      </div>
      <div className='mb-5'>
        <GridFixadas />
      </div>

      <Grid />
    </>
  )
}

export default Anotacoes