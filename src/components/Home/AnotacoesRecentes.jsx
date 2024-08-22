import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GridHome from './GridHome';

function Anotacoes() {
 
  return (
    <>
      <div className='w-full h-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Últimas anotações</div>
        <Link to={`/anotacoes`} className='font-bold text-cinzaTexto py-2 justify-self-start 
        hover:text-verde hover:underline'>Ver tudo</Link>
      </div>
      <GridHome />
    </>
  )
}

export default Anotacoes