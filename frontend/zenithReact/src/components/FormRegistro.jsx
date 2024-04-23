import { Link, useNavigate } from "react-router-dom";
import Validacao from '../pages/RegistroValidacao';
import { useState } from 'react';
import axios from 'axios';
import Input from './Input';
import Button from './Button';
import Label from './Label';
import Select from "./Select";

function FormRegistro() {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: '',
        dataNasc: ''
        genero: '',
      })
      const navigate = useNavigate();
      const [errors, setErrors] = useState({})
      const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validacao(values));
        if (errors.nome === "" && errors.email === "" && errors.senha === "" && errors.dataNasc === '') {
            axios.post('http://localhost:3000/registrar', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err));
        }
      }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <Label nome="Nome"/>
            <Input type="text" name="nome"/>
            {errors.nome && <span>{errors.nome}</span>}
            <br/>
            <Label nome="Email"/>
            <Input type="email" name="email"/>
            <br/>
            <Label nome="Senha"/>
            <Input type="password" name="senha"/> 
            <br/>
            <Label nome="Data de nascimento"/>
            <Input type="date" name="dataNasc"/>
            <br/>
            <Label nome="Gênero" />
            <Select />
            <br/>
            <Button type="submit" text="Registrar"></Button>
            <p className='text-cinzaTexto'>Já tem uma conta? <Link to="/login" className='text-verde hover:underline'>Entrar</Link></p>
        </form>
    </>
  )
}

export default FormRegistro