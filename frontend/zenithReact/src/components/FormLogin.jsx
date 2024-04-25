import { Link } from 'react-router-dom';
import Validacao from '../pages/LoginValidacao';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Label from './Label';

function FormLogin() {
  const [values, setValues] = useState({
    email: '',
    senha: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setErrors(Validacao(values));
  }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <Label nome="E-mail" />
            <br/>
            <Input type="email" name="email" handle={handleInput}></Input>
            {errors.email && <span>{errors.email}</span>}
            <br/>
            <Label nome="Senha" />
                <Input type="password" name="senha" handle={handleInput}></Input>
                {errors.senha && <span>{errors.senha}</span>}
            <br/>
            <Button type="submit" text="Login"/>
            <p className='text-cinzaTexto'>Ainda não tem uma conta? <Link to="/registrar" className='text-verde hover:underline'>Criar conta</Link></p>
        </form>
    </>
  )
}

export default FormLogin