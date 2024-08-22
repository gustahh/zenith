import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sobreposicao from '../../components/Sobreposicao';
import Button from '../../components/Button';



function ArquivarAnotacao() {

    const navigate = useNavigate();
    const { id } = useParams();
    
    function arquivar () {
        axios.post(`http://localhost:3000/notas/arquivar/${id}`)
            .then(res => {
                toast.success("Anotação arquivada.");
                navigate('/anotacoes/arquivadas');
            })
            .catch(err => {
                if (err.response) {
                    // Se houver uma resposta do servidor, exiba a mensagem de erro
                    toast.error(err.response.data.msg);
                } else if (err.request) {
                    // Se a requisição foi feita, mas não houve resposta do servidor
                    console.log('Erro: Sem resposta do servidor');
                    toast.error('Sem resposta do servidor');
                } else {
                    // Se ocorreu um erro antes da requisição ser feita
                    toast.error(err.message);
                }
            });
    }

    return (
        <>
            <div className='w-full h-full absolute z-20 overflow-hidden'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-3/4 sm:w-1/4 sm:h-1/4 bg-ice dark:bg-cinzaEscuro p-5 rounded-md'>
                        <div className='flex justify-center'>
                            <span className='text-xl font-bold text-cinzaTexto'>Arquivar anotação</span>
                        </div>
                        <div className='flex justify-center items-center pb-2'>
                            <span className='text-md text-cinzaTexto'>
                                Arquivar uma anotação não impede dela aparecer
                                <strong> em seus relatórios.</strong>
                            </span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <Link to='/anotacoes'>
                                <Button className='w-1/2 h-12 bg-transparent p-5 text-white font-bold rounded-md flex items-center hover:bg-white/20'
                                type="submit" text="Cancelar" />
                            </Link>
                           
                            <button  className='w-1/2 h-12 bg-red-500 text-white p-5 font-bold rounded-md
                            flex items-center' onClick={arquivar}>
                                <span className='pl-1'>Sim, prosseguir</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <Sobreposicao />
        </>


    )
}

export default ArquivarAnotacao