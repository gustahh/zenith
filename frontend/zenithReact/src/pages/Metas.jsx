import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import MostrarMetas from '../components/MostrarMetas';

function Metas() {
  

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold text-cinzaTexto'>Metas</div>
        <Button className='w-auto h-auto p-2 bg-verde rounded-md text-white
      font-bold text-sm flex items-center justify-content-start' text='Adicionar' />
      </div>
      <MostrarMetas />
    </>
  )
}

export default Metas