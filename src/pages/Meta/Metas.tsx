import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import MostrarMetas from '../../components/Meta/MostrarMetas';

const Metas: React.FC = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-bold text-cinzaTexto'>Metas</div>
        <Link to='/metas/criar'>
          <Button 
            className='w-auto h-auto p-2 bg-verde rounded-md text-white font-bold text-sm flex items-center justify-content-start' 
            text='Adicionar' 
          />
        </Link>
      </div>
      <MostrarMetas />
    </>
  );
}

export default Metas;
