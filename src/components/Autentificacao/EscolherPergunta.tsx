import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Sobreposicao from '../Sobreposicao';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import Fechar from '../../icons/Fechar';
import Perguntas2FA from './Perguntas2FA';

interface Values {
    pergunta: string;
    resposta: string;
}

function EscolherPergunta() {
    const [values, setValues] = useState<Values>({ pergunta: '', resposta: '' });
    const navigate = useNavigate();

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Valida os campos
        if (!values.pergunta || !values.resposta) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }

        try {
            await Promise.all([
                axios.post('http://localhost:3000/2FA/adicionar/pergunta', { pergunta: values.pergunta }),
                axios.post('http://localhost:3000/2FA/adicionar/resposta', { resposta: values.resposta })
            ]);

            toast.success("Pergunta e resposta adicionadas com sucesso.");
            // Redirecionar ou limpar o formulário, se necessário
            navigate('/config/privacidadeconta');
        } catch (err: any) {
            const errorMessage = err.response
                ? err.response.data.msg
                : err.request
                    ? 'Sem resposta do servidor'
                    : err.message;

            toast.error(errorMessage);
        }
    };

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
                            <Perguntas2FA handle={handleInput} />
                            <div className=''>
                                <Label nome="Sua resposta" />
                                <Input type="text" name="resposta" placeholder="Sua resposta" handle={handleInput} />
                                <Button className='w-full h-12 bg-verde text-white font-bold rounded-md'
                                    type="submit" text="Salvar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Sobreposicao />
            <ToastContainer />
        </>
    );
}

export default EscolherPergunta;
