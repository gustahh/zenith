import React from 'react';
import ViewConfiguracao from '../components/View';
import { Link, useNavigate } from 'react-router-dom';

function Configuracoes() {

    function BotaoLogout() {
        localStorage.removeItem('token');
        location.reload();
    }

    return (
        <>
            <div className='w-[50%] sm:w-[50%] h-screen bg-branco dark:bg-cinzaEscuro p-5 float-left'>
                <input type="text" className='w-full h-8 rounded-md border-2 border-cinzaTexto/50 bg-transparent
                p-2 placeholder:text-cinzaTexto/80'
                    placeholder='Pesquisar' />
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
                    <Link to='/config/Notificacoes'>
                        <li className='border-y-2 border-cinzaTexto/10 p-4'>
                            <span className='text-xl font-bold text-cinzaTexto pb-3'>Notificações</span>
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