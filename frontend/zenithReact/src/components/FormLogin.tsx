import { Link } from 'react-router-dom';
function FormLogin() {
  return (
    <>
        <form action="">
            <label> 
                email
                <input type="text" name="email" />
            </label>
            <br/>
            <label> 
                Senha
                <input type="password" name="senha" />
            </label>
            <br/>
            <button type="submit">Login</button>
            <p>Ainda não tem uma conta?<Link to="/registrar">Criar conta</Link></p>
        </form>
    </>
  )
}

export default FormLogin