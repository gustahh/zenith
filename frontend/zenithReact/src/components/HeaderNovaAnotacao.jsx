import React from 'react';
import Voltar from '../icons/Voltar';
import Pincel from '../icons/Pincel';
import Nuvem from '../icons/Nuvem';
import Atualizando from '../icons/Atualizando';
import Face from '../icons/Face';
import { useParams, useNavigate } from 'react-router-dom';
import Descer from '../icons/Descer';

function HeaderNovaAnotacao(props) {
    const handleClickPincel = () => {
        props.onClickPincel(); // 
      };
      const navigate = useNavigate();
      function voltarPagina() {
        navigate('/home');
      }
    return (
        <header className='w-full h-10 flex'>
            <div className='w-full h-full p-3 flex items-center justify-between'>
                <button onClick={voltarPagina}>
                    <Voltar className='opacity-70' stroke='#000000'  />
                </button>

                <div>
                    <span className='pl-3 opacity-70 font-bold justify-self-start'>Anotação</span>
                </div>
                <div className={`flex items-center ml-auto ${props.salvando}`}>
                    <Nuvem className={`mr-1 opacity-70`} stroke='#000000' />
                    <span className='font-bold text-sm opacity-70'>Salvando...</span>
                </div>
                <button className='ml-3' onClick={handleClickPincel}>
                    <Pincel className='opacity-70' stroke='#000000' />
                </button>
                <button className='ml-3 flex items-center cursor-pointer'>
                    <Face className='opacity-70 float-left' stroke='#000000' />
                    <div className='w-26 h-5 ml-2 font-bold opacity-70 cursor-pointer flex items-center'>
                        <span className='float-left mr-1'>{props.emocao}</span>
                        <Descer className='opacity-70 float-left' stroke='#000000'/>
                        
                    </div>
                    <div className='w-32 h-auto mt-40 -translate-x-12 absolute isolate aspect-video rounded-md 
                    bg-white/10 ring-1 ring-black/5 z-10 cursor-pointer'>
                            <div className='w-full font-bold opacity-70 rounded-t-md hover:bg-white/20'
                            tabIndex={'Muito feliz'}>Muito feliz</div>
                            <div className='w-full font-bold opacity-70 hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Feliz'}>Feliz</div>
                            <div className='w-full font-bold opacity-70 hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Neutro'}>Neutro</div>
                            <div className='w-full font-bold opacity-70 hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Triste'}>Triste</div>
                            <div className='w-full font-bold opacity-70 rounded-b-md hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Muito triste'}>Muito triste</div>
                        </div>
                </button>
                
            </div>
        </header>
    )
}

export default HeaderNovaAnotacao