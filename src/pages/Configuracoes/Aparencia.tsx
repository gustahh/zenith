import React from 'react';
import TrocaTema from '../../components/TrocaTema';

const Tema: React.FC = () => {
  return (
    <>
      <div>
        <div className='flex'>
          <span className='flex w-full h-text-xl font-bold text-cinzaTexto p-0 m-0 pb-3'>
            Aparência
          </span>
        </div>

        <div className='border-y-2 border-cinzaTexto/10 p-4'>
          <div className='flex items-center justify-between'>
            <div className='w-full flex items-center justify-between'>
              <span className='text-md font-bold text-cinzaTexto p-0 m-0 pb-3'>Tema</span>
              <TrocaTema />
            </div>
          </div>

          <div>
            <p className='pb-3 w-full text-xs leading-3 text-cinzaTexto'>
              Personalize a aparência do Zenith no seu dispositivo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tema;
