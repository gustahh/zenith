import React, { useState } from 'react';
import { Link }  from 'react-router-dom';
import Lixeira from '../icons/Lixeira';

const BlocoMedio = (props) => {
  const [visao, setVisao] = useState('hidden');
  const mouseOverOpcoes = () => {
    setVisao('block');
  }
  const mouseOutOpcoes = () => {
    setVisao('hidden');
  }


  return (
    <>
      <div className={`flex-none w-full h-20 bg-${props.cor} rounded-md 
          flex flex-col items-center cursor-pointer overflow-hidden`}
        id={props.id} onMouseOver={mouseOverOpcoes} onMouseOut={mouseOutOpcoes}>

        <div className={`w-full h-6 self-start ${visao}`}>
          <div className='flex justify-end pr-2 pt-2'>
            <button>
              <Lixeira className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
            </button>
          </div>
        </div>

        <div className='w-full h-full flex items-center pl-3' >
          <Link to={`/anotacoes/${props.id}`}>
            <span className='font-bold opacity-70 text-xl'>
              {props.titulo}
            </span>
          </Link>
        </div>

      </div>
    </>
  );
};

export default BlocoMedio;