import { Link, useNavigate } from "react-router-dom";
import Validacao from '../pages/RegistroValidacao';
import { useState } from 'react';
import axios from 'axios';

function FormRegistro() {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: '',
        dataNasc: ''
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
            axios.post('http://localhost:8080/registrar', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err));
        }
      }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <label> 
                Nome
                <input type="text" name="nome" onChange={handleInput}/>
                {errors.nome && <span>{errors.nome}</span>}
            </label>
            <br/>
            <label> 
                Email
                <input type="text" name="email" onChange={handleInput}/>
                {errors.email && <span>{errors.email}</span>}
            </label>
            <br/>
            <label> 
            Senha
                <input type="password" name="senha" onChange={handleInput}/>
                {errors.senha && <span>{errors.senha}</span>}
            </label>
            <br/>
            <label> 
            Data de nascimento
                <input type="date" name="dataNasc" onChange={handleInput}/>
                {errors.dataNasc && <span>{errors.dataNasc}</span>}
            </label>
            <br/>
            <label> 
                Genero
                <select name="genero">
                    <option value="M">masculino</option>
                    <option value="F">feminino</option>
                    <option value="O">outro</option>
                </select>
            </label>
            <br/>
            <button type="submit">Registrar</button>
            <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
        </form>
    </>
  )
}

export default FormRegistro