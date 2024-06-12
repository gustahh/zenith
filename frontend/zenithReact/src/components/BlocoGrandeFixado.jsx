import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PinCheio from '../icons/PinCheio';

const Bloco = (props) => {
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
      <div className={`flex-none w-30 h-30 sm:w-full sm:h-60 bg-${props.cor} rounded-md 
          flex flex-col items-center cursor-pointer overflow-hidden`}
        id={props.id} onMouseOver={mouseOverOpcoes} onMouseOut={mouseOutOpcoes}>

        <div className={`w-full h-6 self-start`}>
          <div className='flex justify-end pr-2 pt-2'>
            <Link to={`/anotacoes/desafixar/${id}`}>
              <button className=''>
                <PinCheio className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
              </button>
            </Link>
          </div>
        </div>

        <div className='w-full h-full flex items-center pl-3' >
          <span className='font-bold opacity-70 text-sm sm:text-xl'>
            {props.titulo}
          </span>
        </div>

      </div>
    </>
  );
};

export default Bloco;