import { Link } from "react-router-dom"

function FormRegistro() {
  return (
    <>
        <form action="">
            <label> 
                Nome
                <input type="text" name="nome" />
            </label>
            <br/>
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
            <label> 
            Data de nascimento
                <input type="date" name="dataNasc" />
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