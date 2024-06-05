import React from 'react';
import CriarAnotacao from './CriarAnotacao';
import Grid from '../components/Grid';
import Reflexao from '../components/Reflexao';

function Anotacoes() {
  
  return (
    <>
    <Reflexao/>
      <div className='w-full h-auto flex items-center justify-between pb-2'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Anotações</div>
        <CriarAnotacao />
      </div>
      <Grid />
    </>
  )
}

export default Anotacoes