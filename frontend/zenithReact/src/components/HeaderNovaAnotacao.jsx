import React, { useState, useEffect } from 'react';
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

    let [valorScale, setValorScale] = useState(0);

    const scale = () => {
        if (valorScale === 1) {
            setValorScale(0);
        } else {
            setValorScale(1);
        }
    }
    let emocao = props.emocao;
    const [tabIndexClicado, setTabIndexClicado] = useState(emocao);
    const [n, setN] = useState(0);

    useEffect(() => {
        // Atualiza o estado tabIndexClicado sempre que props.emocao mudar
        setTabIndexClicado(props.emocao);
        if (props.emocao === 'Muito feliz') {
            setN(-1);
        } else if (props.emocao === 'Feliz') {
            setN(-47);
        } else if (props.emocao === 'Neutro') {
            setN(-30);
        } else if (props.emocao === 'Triste') {
            setN(-38);
        } else if (props.emocao === 'Muito triste') {
            setN(5);
        }
    }, [props.emocao]);

    const handleClickOpcoes = (event) => {
        const tabIndex = event.target.getAttribute("tabindex");
        setTabIndexClicado(tabIndex);
        if (tabIndex === 'Muito feliz') {
            setN(-1);
        } else if (tabIndex === 'Feliz') {
            setN(-47);
        } else if (tabIndex === 'Neutro') {
            setN(-30);
        } else if (tabIndex === 'Triste') {
            setN(-38);
        } else if (tabIndex === 'Muito triste') {
            setN(5);
        }
    };


    return (
        <header className='w-full h-10 flex'>
            <div className='w-full h-full p-3 flex items-center justify-between'>
                <button onClick={voltarPagina}>
                    <Voltar className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
                </button>

                <div>
                    <span className='pl-3 opacity-70 font-bold justify-self-start'>Anotação</span>
                </div>
                <div className={`flex items-center ml-auto ${props.salvando}`}>
                    <Nuvem className={`mr-1 opacity-70`} stroke='#000000' />
                    <span className='font-bold text-sm opacity-70'>Salvando...</span>
                </div>
                <button className='ml-3 p-1 rounded-md hover:bg-white/20' onClick={handleClickPincel}>
                    <Pincel className='opacity-70' stroke='#000000' />
                </button>
                <button className='ml-2 flex items-center cursor-pointer p-1 rounded-md hover:bg-white/20' onClick={scale}>
                    <Face className='opacity-70 float-left' stroke='#000000' />
                    <div className='w-26 h-5 ml-2 font-bold opacity-70 cursor-pointer flex items-center'>
                        <span className='float-left mr-1'>{tabIndexClicado}</span>
                        <Descer className='opacity-70 float-left' stroke='#000000' />
                    </div>
                    <div className={`w-32 h-auto mt-40 absolute isolate aspect-video rounded-md 
                    bg-white/10 ring-1 ring-black/5 z-10 cursor-pointer transition ease-in-out 
                    duration-400`} style={{ transformOrigin: 'top right', transform: `translateX(${n}px) scale(${valorScale})` }} >
                        <div className='w-full font-bold opacity-70 rounded-t-md hover:bg-white/20'
                            tabIndex={'Muito feliz'} onClick={handleClickOpcoes}>
                            Muito feliz
                        </div>
                        <div className='w-full font-bold opacity-70 hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Feliz'} onClick={handleClickOpcoes}>
                            Feliz
                        </div>
                        <div className='w-full font-bold opacity-70 hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Neutro'} onClick={handleClickOpcoes}>
                            Neutro
                        </div>
                        <div className='w-full font-bold opacity-70 hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Triste'} onClick={handleClickOpcoes}>
                            Triste
                        </div>
                        <div className='w-full font-bold opacity-70 rounded-b-md hover:bg-blue-500 
                            hover:bg-white/20' tabIndex={'Muito triste'} onClick={handleClickOpcoes}>
                            Muito triste
                        </div>
                    </div>
                </button>

            </div>
        </header>
    )
}

export default HeaderNovaAnotacao