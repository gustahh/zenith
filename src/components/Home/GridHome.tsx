import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pin from '../../icons/Pin';
import Arquivar from '../../icons/Arquivar';

interface BlocoMedioProps {
  bloco: {
    id_anotacao: string;
    titulo: string;
    cor: string;
  };
  titulo: string;
  cor: string;
  id: string;
}

const BlocoMedio: React.FC<BlocoMedioProps> = ({ bloco, titulo, cor, id }) => {
  const [visao, setVisao] = useState<string>('opacity-0');

  const mouseOverOpcoes = () => {
    setVisao('opacity-100');
  };

  const mouseOutOpcoes = () => {
    setVisao('opacity-0');
  };

  return (
    <div
      className={`h-10 flex-none sm:w-full sm:h-20 bg-${cor} rounded-md 
        flex flex-col items-center cursor-pointer overflow-hidden`}
      id={id}
      onMouseOver={mouseOverOpcoes}
      onMouseOut={mouseOutOpcoes}
    >
      <div className={`w-full h-6 self-start ${visao}`}>
        <div className='flex justify-end pr-2 pt-2'>
          <Link to={`/anotacoes/fixar/${id}`}>
            <button className='mx-2'>
              <Pin className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
            </button>
          </Link>
          <Link to={`/anotacoes/arquivar/${id}`}>
            <button>
              <Arquivar className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
            </button>
          </Link>
        </div>
      </div>

      <div className='w-full h-full flex items-center pl-3'>
        <span className='font-bold opacity-70 text-sm sm:text-xl'>
          {titulo}
        </span>
      </div>
    </div>
  );
};

export default BlocoMedio;
