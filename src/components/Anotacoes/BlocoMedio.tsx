import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pin from '../../icons/Pin';
import Arquivar from '../../icons/Arquivar';

interface BlocoMedioProps {
    bloco: {
        id_anotacao: string;
        cor: string;
        titulo: string;
    };
}

const BlocoMedio: React.FC<BlocoMedioProps> = ({ bloco }) => {
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
            className={`h-10 flex-none sm:w-full sm:h-20 bg-${cor} rounded-md 
                flex flex-col items-center cursor-pointer overflow-hidden`}
            id={id_anotacao}
            onMouseOver={mouseOverOpcoes}
            onMouseOut={mouseOutOpcoes}
        >
            <div className={`w-full h-6 self-start ${visao}`}>
                <div className='flex justify-end pr-2 pt-2'>
                    <Link to={`/anotacoes/fixar/${id_anotacao}`}>
                        <button className='mx-2'>
                            <Pin className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
                        </button>
                    </Link>
                    <Link to={`/anotacoes/arquivar/${id_anotacao}`}>
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
