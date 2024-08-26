import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import Voltar from '../../icons/Voltar';
import Label from '../../components/Label';
import Input from '../../components/Input';

// Defina os tipos para os valores do estado
interface Values {
  novoEmail: string;
}

// Defina os tipos para os erros do estado (se necessário)
interface Errors {
  [key: string]: string;
}

function AlterarEmail() {
  const [values, setValues] = useState<Values>({ novoEmail: '' });
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:3000/perfil/editar/email', { email: values.novoEmail })
      .then(() => {
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
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Voltar fill="#999999" />
          <span className='text-xl font-bold text-cinzaTexto pb-3'>Alterar Email</span>
        </div>
        <div>
          <Label nome="Novo E-mail" />
          <Input
            type="email"
            name="novoEmail"
            placeholder="Digite o seu novo endereço de email"
            handle={handleInput}
          />
          <Button
            type="submit"
            className="w-20 h-10 pr-1 bg-verde rounded-md text-white font-bold text-sm text-center"
            text="Salvar"
          />
        </div>
      </form>
    </>
  );
}

export default AlterarEmail;
