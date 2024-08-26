import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PinCheio from '../../icons/PinCheio';

interface BlocoProps {
    bloco: {
        id_anotacao: string;
        cor: string;
        titulo: string;
    };
}

const Bloco: React.FC<BlocoProps> = ({ bloco }) => {
    const [visao, setVisao] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

    const mouseOverOpcoes = () => {
        setVisao('opacity-100');
    };

    const mouseOutOpcoes = () => {
        setVisao('opacity-0');
    };

    const { id_anotacao, cor, titulo } = bloco;

    return (
        <div
            className={`flex-none w-30 h-30 sm:w-full sm:h-60 bg-${cor} rounded-md 
                flex flex-col items-center cursor-pointer overflow-hidden`}
            id={id_anotacao}
            onMouseOver={mouseOverOpcoes}
            onMouseOut={mouseOutOpcoes}
        >
            <div className={`w-full h-6 self-start ${visao}`}>
                <div className='flex justify-end pr-2 pt-2'>
                    <Link to={`/anotacoes/desafixar/${id_anotacao}`}>
                        <button>
                            <PinCheio className='opacity-70 rounded-md hover:bg-white/20' />
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

export default Bloco;
