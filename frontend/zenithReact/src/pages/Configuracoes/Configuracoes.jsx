import React from 'react';
import ViewConfiguracao from '../../components/View';
import { Link, useNavigate } from 'react-router-dom';

function Configuracoes() {

    function BotaoLogout() {
        localStorage.removeItem('token');
        location.reload();
    }
    let index = '';
    {location.pathname === "/config" ? index = 'z-20' : index = 'z-0'}
    return (
        <>
            <div className={`${index} w-screen h-screen absolute sm:relative sm:w-[50%] sm:w-[50%] h-screen bg-branco dark:bg-cinzaEscuro sm:p-5 float-left`}>
            <span className='text-xl font-bold text-cinzaTexto pb-3'>Configurações</span>
                <ul>
                    <Link to='/config/suaconta'>
                        <li className='border-y-2 border-cinzaTexto/10 p-4'>
                            <span className='text-xl font-bold text-cinzaTexto pb-3'>Sua conta</span>
                        </li>

                    </Link>
                    <Link to='/config/privacidadeconta'>
                        <li className='border-y-2 border-cinzaTexto/10 p-4'>
                            <span className='text-xl font-bold text-cinzaTexto pb-3'>Privacidade e Segurança</span>
                        </li>

                    </Link>
                    <Link to='/config/aparencia'>
                        <li className='border-y-2 border-cinzaTexto/10 p-4'>
                            <span className='text-xl font-bold text-cinzaTexto pb-3'>Aparência</span>
                        </li>

                    </Link>

                    <button onClick={BotaoLogout}>
                        <li className='border-y-2 border-cinzaTexto/10 p-4 cursor-pointer'>
                            <span className='text-xl font-bold text-red-500 pb-3'>Sair</span>
                        </li>
                    </button>
                </ul>
            </div>
        </>
    )
}

export default Configuracoes