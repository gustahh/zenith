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

    axios.post('http://localhost:3000/auth/registrar', values)
      .then(res => {
        navigate('/login')
      })
      .catch(err => {
        if (err.response) {
          // Se houver uma resposta do servidor, exiba a mensagem de erro
          console.log('Erro:', err.response.data.msg);
        } else if (err.request) {
          // Se a requisição foi feita, mas não houve resposta do servidor
          console.log('Erro: Sem resposta do servidor');
        } else {
          // Se ocorreu um erro antes da requisição ser feita
          console.log('Erro:', err.message);
        }
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label nome="Nome" />
        <Input type="text" name="nome" handle={handleInput} />
        {errors.nome && <span>{errors.nome}</span>}
        <br />
        <Label nome="Email" />
        <Input type="email" name="email" handle={handleInput} />
        {errors.email && <span>{errors.email}</span>}
        <br />
        <Label nome="Senha" />
        <Input type="password" name="senha" handle={handleInput} />
        {errors.senha && <span>{errors.senha}</span>}
        <br />
        <Label nome="Data de nascimento" />
        <Input type="date" name="dataNasc" handle={handleInput} />
        {errors.dataNasc && <span>{errors.dataNasc}</span>}
        <br />
        <Label nome="Gênero" />
        <select name="genero" className='w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto' onChange={handleInput}>
          <option value="">Selecione uma opção</option>
          <option value="M">masculino</option>
          <option value="F">feminino</option>
          <option value="O">outro</option>
        </select>
        {errors.genero && <span>{errors.genero}</span>}
        <br />
        <Button type="submit" text="Registrar" />
        <p className='text-cinzaTexto'>Já tem uma conta? <Link to="/login" className='text-verde hover:underline'>Entrar</Link></p>
      </form>
    </>
  )
}

export default FormRegistro;