import { Link, useNavigate } from 'react-router-dom';
import Validacao from '../pages/LoginValidacao';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Label from './Label';
import axios from 'axios';
import { toast } from 'react-toastify';

function FormLogin() {
  const [values, setValues] = useState({
    email: '',
    senha: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validacao(values));
    console.log(values);
    axios.post('http://localhost:3000/auth/login', values)
      .then(res => {
        // Extrai o token JWT da resposta
        const token = res.data.token;

        // Armazena o token no localStorage
        localStorage.setItem('token', token);
        navigate('/home');
        toast.success(response.data.msg);
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
      <form action="" onSubmit={handleSubmit}>
        <Label nome="E-mail" />
        <br />
        <Input type="email" name="email" handle={handleInput}></Input>
        {
          errors.email &&
          <span className="text-red-500 float-left text-sm">{errors.email}</span> &&
          document.querySelector('[name="email"]').classList.add('border-2', 'border-solid', '!border-red-500')
        }
        <br />
        <Label nome="Senha" />
        <Input type="password" name="senha" handle={handleInput}></Input>
        {
          errors.senha &&
          <span className="text-red-500 float-left text-sm">{errors.senha}</span> &&
          document.querySelector('[name="senha"]').classList.add('border-2', 'border-solid', '!border-red-500')
        }
        <br />
        <Button type="submit" text="Login" />
        <p className='text-cinzaTexto'>Ainda não tem uma conta? <Link to="/registrar" className='text-verde hover:underline'>Criar conta</Link></p>
      </form>
    </>
  )
}

export default FormLogin