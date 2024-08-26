import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validacao from '../../pages/Registro/RegistroValidacao';
import axios from 'axios';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define a interface para o estado dos valores do formulário
interface FormValues {
  nome: string;
  email: string;
  data_nasc: string;
  genero: string;
  senha: string;
}

// Define a interface para o estado dos erros
interface FormErrors {
  nome?: string;
  email?: string;
  data_nasc?: string;
  genero?: string;
  senha?: string;
}

function FormRegistro() {
  const [values, setValues] = useState<FormValues>({
    nome: '',
    email: '',
    data_nasc: '',
    genero: '',
    senha: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = Validacao(values);
    setErrors(validationErrors);

    axios.post('http://localhost:3000/auth/registrar', values)
      .then(res => {
        navigate('/login');
        toast.success("Você criou uma conta!");
      })
      .catch(err => {
        if (err.response) {
          toast.error(err.response.data.msg);
        } else if (err.request) {
          toast.error('Sem resposta do servidor');
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label nome="Nome" id="nome" />
        <Input
          type="text"
          name="nome"
          handle={handleInput}
          placeholder="Nome"
          className={errors.nome ? 'border-2 border-solid border-red-500' : ''}
        />
        {errors.nome && <span className="text-red-500 float-left text-sm">{errors.nome}</span>}
        <br />
        <Label nome="Email" id="email" />
        <Input
          type="email"
          name="email"
          handle={handleInput}
          placeholder="Seu melhor e-mail"
          className={errors.email ? 'border-2 border-solid border-red-500' : ''}
        />
        {errors.email && <span className="text-red-500 float-left text-sm">{errors.email}</span>}
        <br />
        <Label nome="Senha" id="senha" />
        <Input
          type="password"
          name="senha"
          handle={handleInput}
          placeholder="Digite sua senha"
          className={errors.senha ? 'border-2 border-solid border-red-500' : ''}
        />
        {errors.senha && <span className="text-red-500 float-left text-sm">{errors.senha}</span>}
        <br />
        <Label nome="Data de nascimento" id="data_nasc" />
        <Input
          type="date"
          name="data_nasc"
          handle={handleInput}
          className={errors.data_nasc ? 'border-2 border-solid border-red-500' : ''}
        />
        {errors.data_nasc && <span className="text-red-500 float-left text-sm">{errors.data_nasc}</span>}
        <br />
        <Label nome="Gênero" />
        <select
          name="genero"
          className={`w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto ${errors.genero ? 'border-2 border-solid border-red-500' : ''}`}
          onChange={handleInput}
        >
          <option value="">Selecione uma opção</option>
          <option value="M">masculino</option>
          <option value="F">feminino</option>
          <option value="O">outro</option>
        </select>
        {errors.genero && <span className="text-red-500 float-left text-sm">{errors.genero}</span>}
        <br />
        <Button className='w-80 h-12 bg-verde text-white font-bold rounded-md' type="submit" text="Registrar" />
        <p className='text-cinzaTexto'>Já tem uma conta? <Link to="/login" className='text-verde hover:underline'>Entrar</Link></p>
      </form>
      <ToastContainer />
    </>
  );
}

export default FormRegistro;
