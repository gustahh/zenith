import { Link, useNavigate } from "react-router-dom";
import Validacao from '../pages/RegistroValidacao';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import Label from './Label';
import Select from "./Select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormRegistro() {
  const [values, setValues] = useState({
    nome: '',
    email: '',
    dataNasc: '',
    genero: '',
    senha: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Valida os campos
    const validationErrors = Validacao(values);
    setErrors(validationErrors);

    axios.post('http://localhost:3000/auth/registrar', values)
      .then(res => {
        navigate('/login');
        toast.success("Você criou uma conta!");
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
        <Label nome="Nome" id="nome" />
        <Input type="text" name="nome" handle={handleInput} />
        {
        errors.nome && 
        <span className="text-red-500 float-left text-sm">{errors.nome}</span> && 
        document.querySelector('[name="nome"]').classList.add('border-2', 'border-solid', '!border-red-500')
        }
        <br />
        <Label nome="Email" id="email"/>
        <Input type="email" name="email" handle={handleInput} />
        {
        errors.email && 
        <span className="text-red-500 float-left text-sm">{errors.email}</span> && 
        document.querySelector('[name="email"]').classList.add('border-2', 'border-solid', '!border-red-500')
        }
        <br />
        <Label nome="Senha" id="senha" />
        <Input type="password" name="senha" handle={handleInput} />
        {
        errors.senha && 
        <span className="text-red-500 float-left text-sm">{errors.senha}</span> && 
        document.querySelector('[name="senha"]').classList.add('border-2', 'border-solid', '!border-red-500')
        }
        <br />
        <Label nome="Data de nascimento" id="dataNasc" />
        <Input type="date" name="dataNasc" handle={handleInput} />
        {
        errors.dataNasc && 
        <span className="text-red-500 float-left text-sm">{errors.dataNasc}</span> && 
        document.querySelector('[name="dataNasc"]').classList.add('border-2', 'border-solid', '!border-red-500')
        }
        <br />
        <Label nome="Gênero" />
        <select name="genero" className='w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto' onChange={handleInput}>
          <option value="">Selecione uma opção</option>
          <option value="M">masculino</option>
          <option value="F">feminino</option>
          <option value="O">outro</option>
        </select>
        {
        errors.genero && 
        <span className="text-red-500 float-left text-sm">{errors.genero}</span> && 
        document.querySelector('[name="genero"]').classList.add('border-2', 'border-solid', 'border-red-500')
        }
        <br />
        <Button className='w-80 h-12 bg-verde text-white font-bold rounded-md' type="submit" text="Registrar" />
        <p className='text-cinzaTexto'>Já tem uma conta? <Link to="/login" className='text-verde hover:underline'>Entrar</Link></p>
      </form>
    </>
  )
}

export default FormRegistro;