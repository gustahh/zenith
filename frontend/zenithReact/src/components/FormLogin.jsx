import { Link } from 'react-router-dom';
import Validacao from '../pages/LoginValidacao';
import { useState } from 'react';
function FormLogin() {
  const [values, setValues] = useState({
    email: '',
    senha: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validacao(values));
  }
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <label> 
                email
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
            <button type="submit">Login</button>
            <p>Ainda não tem uma conta?<Link to="/registrar">Criar conta</Link></p>
        </form>
    </>
  )
}

export default FormLogin