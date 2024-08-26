import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sobreposicao from '../../components/Sobreposicao';
import Button from '../../components/Button';

const FixarAnotacao: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<string>();

    const fixar = async () => {
        try {
            await axios.post(`http://localhost:3000/notas/fixar/${id}`);
            toast.success("Anotação fixada.");
            navigate('/anotacoes');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                // Verifica se o erro é uma instância de AxiosError
                if (err.response) {
                    toast.error(err.response.data.msg || 'Erro ao fixar a anotação.');
                } else if (err.request) {
                    toast.error('Sem resposta do servidor.');
                } else {
                    toast.error(err.message || 'Erro desconhecido.');
                }
            } else {
                toast.error('Erro desconhecido.');
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='w-full h-full absolute z-20 overflow-hidden'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-3/4 sm:w-1/4 sm:h-1/4 bg-ice dark:bg-cinzaEscuro p-5 rounded-md'>
                        <div className='flex justify-center'>
                            <span className='text-xl font-bold text-cinzaTexto'>Fixar anotação</span>
                        </div>
                        <div className='flex justify-center items-center pb-2'>
                            <span className='text-md text-cinzaTexto'>
                                Fixar uma anotação faz ela aparecer 
                                <strong> em destaque.</strong>
                            </span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <Link to='/anotacoes'>
                                <Button 
                                    className='w-auto h-12 bg-transparent p-5 text-cinzaTexto dark:text-white font-bold rounded-md flex items-center hover:bg-white/20'
                                    text="Cancelar" 
                                />
                            </Link>
                            <button  
                                className='w-1/2 h-12 bg-red-500 text-white p-5 font-bold rounded-md flex items-center justify-center' 
                                onClick={fixar}
                            >
                                <span className='pl-1'>Isso, fixa ela!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Sobreposicao />
        </>
    );
};

export default FixarAnotacao;
