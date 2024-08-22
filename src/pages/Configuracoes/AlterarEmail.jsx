import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import Voltar from '../../icons/Voltar';
import Label from '../../components/Label';
import Input from '../../components/Input';


function AlterarEmail() {

  const [values, setValues] = useState({
    novoEmail: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/perfil/editar/email', { email: values.novoEmail })
      .then(res => {
        navigate('/config/suaconta');
        toast.success("Você alterou seu email");
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
      <form onSubmit={handleSubmit}>
        <div>
          <Voltar fill="#999999" />
          <span className='text-xl font-bold text-cinzaTexto pb-3'>Alterar Email</span>

        </div>
        <div>
          <Label nome="Novo E-mail"></Label>
          <Input type="email" name="novoEmail" placeholder="Digite o seu novo endereço de email" handle={handleInput}></Input>
          <Button type="submit" className="w-20 h-10 pr-1 bg-verde rounded-md text-white
      font-bold text-sm text-center" text="Salvar"></Button>
        </div>
      </form>
    </>

  )
}

export default AlterarEmail