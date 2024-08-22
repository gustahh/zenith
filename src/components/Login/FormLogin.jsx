import { Link, useNavigate } from 'react-router-dom';
import Validacao from '../../pages/Login/LoginValidacao';
import { useState, useEffect } from 'react';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import Autentificacao from '../Autentificacao/Autentificacao';
import axios from 'axios';
import { toast } from 'react-toastify';

function FormLogin() {
  const [values, setValues] = useState({
    email: '',
    senha: ''
  })
  const [visibilidade, setVisibilidade] = useState('hidden');
  const [visibilidadeLogin, setVisibilidadeLogin] = useState('block');
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validacao(values));

    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const resposta = await axios.get('http://localhost:3000/2FA/checarUsuario', {
      params: { email: values.email }
    });

    axios.post('http://localhost:3000/auth/login', values)
      .then(res => {
        if (resposta.data.msg === 'true') {
          setVisibilidade('block');
          setVisibilidadeLogin('hidden');
        } else {
          // Extrai o token JWT da resposta
          const token = res.data.token;
          // Armazena o token no localStorage
          localStorage.setItem('token', token);
          window.location.reload();
        }

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
      <Autentificacao visibilidade={visibilidade} email={values.email} />
      <div className={`${visibilidadeLogin}`}>
        <form action="" onSubmit={handleSubmit}>
          <Label nome="E-mail" />
          <br />
          <Input type="email" name="email" handle={handleInput} placeholder="Digite seu e-mail"></Input>
          {
            errors.email &&
            <span className="text-red-500 float-left text-sm">{errors.email}</span> &&
            document.querySelector('[name="email"]').classList.add('border-2', 'border-solid', '!border-red-500')
          }
          <br />
          <Label nome="Senha" />
          <Input type="password" name="senha" handle={handleInput} placeholder="Senha"></Input>
          {
            errors.senha &&
            <span className="text-red-500 float-left text-sm">{errors.senha}</span> &&
            document.querySelector('[name="senha"]').classList.add('border-2', 'border-solid', '!border-red-500')
          }
          <br />
          <Button className='w-72 h-12 bg-verde text-white font-bold rounded-md' type="submit" text="Login" />
          <p className='text-cinzaTexto'>Ainda não tem uma conta? <Link to="/registrar" className='text-verde hover:underline'>Criar conta</Link></p>
        </form>
      </div>

    </>
  )
}

export default FormLogin