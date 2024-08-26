import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lixeira from '../../icons/Lixeira';

interface BlocoProps {
    bloco: {
        id_anotacao: string;
        cor: string;
        titulo: string;
    };
}

const Bloco: React.FC<BlocoProps> = ({ bloco }) => {
    const [visao, setVisao] = useState<'hidden' | 'block'>('hidden');

    const mouseOverOpcoes = () => {
        setVisao('block');
    };

    const mouseOutOpcoes = () => {
        setVisao('hidden');
    };

    const { id_anotacao, cor, titulo } = bloco;

    return (
        <div
            className={`flex-none w-36 h-36 bg-${cor} rounded-md 
                mr-4 mb-4 flex flex-col items-center cursor-pointer overflow-hidden`}
            id={id_anotacao}
            onMouseOver={mouseOverOpcoes}
            onMouseOut={mouseOutOpcoes}
        >
            <div className={`w-full h-6 self-start ${visao}`}>
                <div className='flex justify-end pr-2 pt-2'>
                    <button>
                        <Lixeira className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
                    </button>
                </div>
            </div>

            <div className='w-full h-full flex items-center pl-3'>
                <Link to={`/anotacoes/deletar/${id_anotacao}`}>
                    <span className='font-bold opacity-70 text-xl'>
                        {titulo}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Bloco;
