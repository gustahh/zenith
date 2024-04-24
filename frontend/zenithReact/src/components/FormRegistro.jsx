import { Link, useNavigate } from "react-router-dom";
import Validacao from '../pages/RegistroValidacao';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import Label from './Label';
import Select from "./Select";

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
    console.log(values);
    // Valida os campos
    const validationErrors = Validacao(values);
    setErrors(validationErrors);

    // Verifica se há erros de validação
    if (Object.keys(validationErrors).length === 0) {
      // Não há erros, enviar solicitação POST
      axios.post('http://localhost:3000/auth/registrar', values)
        .then(res => {
          navigate('/login')
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label nome="Nome" />
        <Input type="text" name="nome" onChange={handleInput} />
        {errors.nome && <span>{errors.nome}</span>}
        <br />
        <Label nome="Email" />
        <Input type="email" name="email" onChange={handleInput} />
        {errors.email && <span>{errors.email}</span>}
        <br />
        <Label nome="Senha" />
        <Input type="password" name="senha" onChange={handleInput} />
        {errors.senha && <span>{errors.senha}</span>}
        <br />
        <Label nome="Data de nascimento" />
        <Input type="date" name="dataNasc" onChange={handleInput} />
        {errors.dataNasc && <span>{errors.dataNasc}</span>}
        <br />
        <Label nome="Gênero" />
        <Select name="genero" onChange={handleInput} />
        <br />
        <Button type="submit" text="Registrar" />
        <p className='text-cinzaTexto'>Já tem uma conta? <Link to="/login" className='text-verde hover:underline'>Entrar</Link></p>
      </form>
    </>
  )
}

export default FormRegistro;