import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lixeira from '../icons/Lixeira';

const BlocoPequeno = (props) => {
  const [visao, setVisao] = useState('opacity-0');
  const mouseOverOpcoes = () => {
    setVisao('opacity-100');
  }
  const mouseOutOpcoes = () => {
    setVisao('opacity-0');
  }

  const id = props.id;
  
  return (
    <>
      <div className={`flex-none w-full h-12 bg-${props.cor} rounded-md 
          flex flex-col items-center cursor-pointer overflow-hidden`}
        id={props.id} onMouseOver={mouseOverOpcoes} onMouseOut={mouseOutOpcoes}>

        <div className={`w-full h-6 self-start ${visao}`}>
          <div className='flex justify-end pr-2 pt-2'>
            <Link to={`/anotacoes/deletar/${id}`}>
              <button>
                <Lixeira className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
              </button>
            </Link>
          </div>
        </div>

        <div className='w-full h-full flex items-center pl-3 pb-5' >
          <span className='font-bold opacity-70 text-xl pb-3'>
            {props.titulo}
          </span>
        </div>

      </div>
    </>
  );
};

export default BlocoPequeno;