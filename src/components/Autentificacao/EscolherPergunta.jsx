import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Sobreposicao from '../Sobreposicao';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import Fechar from '../../icons/Fechar';
import Perguntas2FA from './Perguntas2FA';

function EscolherPergunta() {
    const [values, setValues] = useState({
        pergunta: '',
        resposta: '',
    });
    console.log(values);
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        // Valida os campos

        axios.post('http://localhost:3000/2FA/adicionar/pergunta', values)
            .then(res => {
                toast.success("Você adicionou uma pergunta.");
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

        axios.post('http://localhost:3000/2FA/adicionar/resposta', values)
            .then(res => {
                toast.success("Você adicionou uma resposta.");
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
                    <div className='w-auto h-auto bg-ice dark:bg-cinzaEscuro p-5 rounded-md'>
                        <Link to='/config/privacidadeconta'>
                            <div className='w-full h-5 flex items-center justify-end cursor-pointer'>
                                <Fechar />
                            </div>
                        </Link>
                        <div className='flex justify-center'>
                            <span className='text-xl font-bold text-cinzaTexto'>Escolha a sua pergunta</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='w-full flex items-center'>
                                <Label nome="Pergunta" />
                            </div>
                            <Perguntas2FA handle={handleInput}/>
                            <div className=''>
                                <Label nome="Sua resposta" />
                                <Input type="text" name="resposta" placeholder="Sua resposta" handle={handleInput}/>
                                <Button className='w-full h-12 bg-verde text-white font-bold rounded-md'
                                    type="submit" text="Salvar" />
                            </div>

                        </form>

                    </div>
                </div>

            </div>
            <Sobreposicao />
        </>
    )
}

export default EscolherPergunta