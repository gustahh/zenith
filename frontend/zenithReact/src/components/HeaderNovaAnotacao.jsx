import React from 'react';
import Voltar from '../icons/Voltar';
import Pincel from '../icons/Pincel';
import Nuvem from '../icons/Nuvem';
import Atualizando from '../icons/Atualizando';

function HeaderNovaAnotacao() {
    return (
        <header className='w-full h-10 flex'>
            <div className='w-full h-full p-5 flex items-center justify-between'>
                <button>
                    <Voltar className='opacity-70' stroke='#000000' />
                </button>

                <div>
                    <span className='pl-3 opacity-70 font-bold justify-self-start'>Anotação</span>
                </div>
                <div className='flex items-center ml-auto'>
                    <Nuvem className='opacity-70' stroke='#000000'/>
                    <Atualizando className='ml-1 mr-1 opacity-70' stroke='#000000'/>
                    <span className='font-bold text-sm opacity-70'>Salvando...</span>
                </div>
                <button className='ml-3'>
                    <Pincel className='opacity-70' stroke='#000000' />
                </button>
            </div>
        </header>
    )
}

export default HeaderNovaAnotacao