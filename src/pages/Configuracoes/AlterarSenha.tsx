import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import Voltar from '../../icons/Voltar';
import Label from '../../components/Label';
import Input from '../../components/Input';

// Defina os tipos para os valores do estado
interface Values {
  senhaAtual: string;
  novaSenha: string;
}

// Defina os tipos para os erros do estado (se necessário)
interface Errors {
  [key: string]: string;
}

function AlterarSenha() {
  const [values, setValues] = useState<Values>({ senhaAtual: '', novaSenha: '' });
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    axios.post('http://localhost:3000/perfil/editar/senha', { senhaAtual: values.senhaAtual, novaSenha: values.novaSenha })
      .then(() => {
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
  };

  return (
    <>
      <div>
        <Voltar fill="#999999" />
        <span className='text-xl font-bold text-cinzaTexto pb-3'>Alterar Senha</span>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Label nome="Senha atual" />
          <Input
            type="password"
            name="senhaAtual"
            placeholder="Digite a sua senha atual"
            handle={handleInput}
          />
          <Label nome="Nova senha" />
          <Input
            type="password"
            name="novaSenha"
            placeholder="Digite a sua nova senha"
            handle={handleInput}
          />
          <Button
            type="submit"
            className="w-20 h-10 pr-1 bg-verde rounded-md text-white font-bold text-sm text-center"
            text="Salvar"
          />
        </form>
      </div>
    </>
  );
}

export default AlterarSenha;
