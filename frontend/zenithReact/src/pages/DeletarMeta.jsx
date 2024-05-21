import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sobreposicao from '../components/Sobreposicao';
import Button from '../components/Button';



function DeletarMeta() {

    const navigate = useNavigate();
    const { id } = useParams();
    
    function deletar () {
        axios.delete(`http://localhost:3000/metas/deletar/${id}`)
            .then(res => {
                toast.success("Meta deletada.");
                navigate('/metas');
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
                    <div className='w-1/4 h-1/4 bg-ice dark:bg-cinzaEscuro p-5 rounded-md'>
                        <div className='flex justify-center'>
                            <span className='text-xl font-bold text-cinzaTexto'>Deletar meta</span>
                        </div>
                        <div className='flex justify-center items-center pb-2'>
                            <span className='text-md text-cinzaTexto'>
                                Tem certeza, que deseja deletar essa meta?
                                <strong> Esta ação é irreversível.</strong>
                            </span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <Link to='/metas'>
                                <Button className='w-1/2 h-12 bg-transparent p-5 text-white font-bold rounded-md flex items-center hover:bg-white/20'
                                type="submit" text="Cancelar" />
                            </Link>
                           
                            <button  className='w-1/2 h-12 bg-red-500 text-white p-5 font-bold rounded-md
                            flex items-center' onClick={deletar}>
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

export default DeletarMeta