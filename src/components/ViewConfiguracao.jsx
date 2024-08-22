import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Voltar from '../icons/Voltar';

function ViewConfiguracao(props) {

    const navigate = useNavigate();

    function voltarPagina() {
        navigate('/config');
    }
    return (
        <>
            <div className={`z-10 w-screen h-screen absolute sm:relative w-[50%] sm:w-[50%] h-screen bg-branco dark:bg-cinzaEscuro float-left`}>
                <div className='w-screen h-10 flex items-center sm:hidden'>
                    <button onClick={voltarPagina}>
                        <Voltar className='opacity-70 rounded-md hover:bg-white/20' stroke='#999999' />
                    </button>
                    <span className='text-xl font-bold text-cinzaTexto'>Voltar</span>
                </div>

                {props.children}
            </div>
        </>


    )
}

export default ViewConfiguracao