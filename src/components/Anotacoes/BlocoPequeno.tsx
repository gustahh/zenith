import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PinCheio from '../../icons/PinCheio';
import Arquivar from '../../icons/Arquivar';

interface BlocoPequenoProps {
    bloco: {
        id_anotacao: string;
        cor: string;
        titulo: string;
    };
}

const BlocoPequeno: React.FC<BlocoPequenoProps> = ({ bloco }) => {
    const [visao, setVisao] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

    const mouseOverOpcoes = () => {
        setVisao('opacity-100');
    };

    const mouseOutOpcoes = () => {
        setVisao('opacity-0');
    };

    return (
        <div
            className={`w-full sm:h-12 bg-${bloco.cor} rounded-md 
                flex flex-col items-center cursor-pointer overflow-hidden`}
            id={bloco.id_anotacao}
            onMouseOver={mouseOverOpcoes}
            onMouseOut={mouseOutOpcoes}
        >
            <div className={`w-full h-6 self-start ${visao}`}>
                <div className='flex justify-end pr-2 pt-2'>
                    <Link to={`/anotacoes/desafixar/${bloco.id_anotacao}`}>
                        <button>
                            <PinCheio className='opacity-70 rounded-md hover:bg-white/20' />
                        </button>
                    </Link>
                    <Link to={`/anotacoes/arquivar/${bloco.id_anotacao}`}>
                        <button>
                            <Arquivar className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
                        </button>
                    </Link>
                </div>
            </div>

            <div className='w-full h-full flex items-center pl-3 pb-5'>
                <span className='font-bold opacity-70 text-xl pb-3'>
                    {bloco.titulo}
                </span>
            </div>
        </div>
    );
};

export default BlocoPequeno;
