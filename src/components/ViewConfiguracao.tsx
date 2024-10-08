import React from 'react';
import { useNavigate } from 'react-router-dom';
import Voltar from '../icons/Voltar';

interface ViewConfiguracaoProps {
  children: React.ReactNode;
}

const ViewConfiguracao: React.FC<ViewConfiguracaoProps> = ({ children }) => {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/config');
  };

  return (
    <>
      <div className='z-10 w-screen h-screen absolute sm:relative w-[50%] sm:w-[50%] h-screen bg-branco dark:bg-cinzaEscuro float-left'>
        <div className='w-screen h-10 flex items-center sm:hidden'>
          <button onClick={voltarPagina}>
            <Voltar className='opacity-70 rounded-md hover:bg-white/20' stroke='#999999' />
          </button>
          <span className='text-xl font-bold text-cinzaTexto'>Voltar</span>
        </div>

        {children}
      </div>
    </>
  );
};

export default ViewConfiguracao;
