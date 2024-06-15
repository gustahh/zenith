import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import Voltar from '../../icons/Voltar';
import Label from '../../components/Label';
import Input from '../../components/Input';

function AlterarSenha() {
    const [values, setValues] = useState({
        senhaAtual: '',
        novaSenha: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        axios.post('http://localhost:3000/perfil/editar/senha', { senha: values.senhaAtual, novaSenha: values.novaSenha })
            .then(res => {
                navigate('/config/suaconta');
                toast.success("Você alterou sua senha");
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
            <div>
                <Voltar fill="#999999" />
                <span className='text-xl font-bold text-cinzaTexto pb-3'>Alterar Senha</span>

            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Label nome="Senha atual"></Label>
                    <Input type="password" name="senhaAtual" placeholder="Digite a sua senha atual" handle={handleInput}></Input>

                    <Label nome="Nova senha"></Label>
                    <Input type="password" name="novaSenha" placeholder="Digite a sua nova senha" handle={handleInput}></Input>
                    <Button type="submit" className="w-20 h-10 pr-1 bg-verde rounded-md text-white
      font-bold text-sm text-center" text="Salvar"></Button>
                </form>
            </div>

        </>

    )
}

export default AlterarSenha