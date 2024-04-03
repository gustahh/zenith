import { useState } from "react"
import FormLogin from "../components/FormLogin"

function Login() {
  const [values, setValues] = useState({
    email: '',
    senha: ''
  })
  return (
    <FormLogin />
  )
}

export default Login