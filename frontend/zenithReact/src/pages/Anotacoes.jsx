import React from 'react';
import CriarAnotacao from './CriarAnotacao';
import Grid from '../components/Grid';

function Anotacoes() {
  
  return (
    <>
      <div className='w-full h-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Anotações</div>
        <CriarAnotacao />
      </div>
      <Grid />
    </>
  )
}

export default Anotacoes