import { Link } from 'react-router-dom';
import Validacao from '../../pages/Login/LoginValidacao';
import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import Autentificacao from '../Autentificacao/Autentificacao';
import axios from 'axios';
import { toast } from 'react-toastify';

// Definindo o tipo para os valores do formulário
interface FormValues {
  email: string;
  senha: string;
}

// Definindo o tipo para os erros de validação
interface FormErrors {
  email?: string;
  senha?: string;
}

function FormLogin() {
  const [values, setValues] = useState<FormValues>({
    email: '',
    senha: ''
  });
  const [visibilidade, setVisibilidade] = useState<string>('hidden');
  const [visibilidadeLogin, setVisibilidadeLogin] = useState<string>('block');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = Validacao(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return; // Evita enviar o formulário se houver erros

    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const resposta = await axios.get('http://localhost:3000/2FA/checarUsuario', {
        params: { email: values.email }
      });

      const loginResponse = await axios.post('http://localhost:3000/auth/login', values);

      if (resposta.data.msg === 'true') {
        setVisibilidade('block');
        setVisibilidadeLogin('hidden');
      } else {
        const token = loginResponse.data.token;
        localStorage.setItem('token', token);
        window.location.reload();
      }
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.msg);
      } else if (err.request) {
        toast.error('Sem resposta do servidor');
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <>
      <Autentificacao visibilidade={visibilidade} email={values.email} />
      <div className={`${visibilidadeLogin}`}>
        <form onSubmit={handleSubmit}>
          <Label nome="E-mail" />
          <Input
            type="email"
            name="email"
            handle={handleInput}
            placeholder="Digite seu e-mail"
            className={`mb-2 ${errors.email ? 'border-2 border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500 float-left text-sm">{errors.email}</span>}
          
          <Label nome="Senha" />
          <Input
            type="password"
            name="senha"
            handle={handleInput}
            placeholder="Senha"
            className={`mb-2 ${errors.senha ? 'border-2 border-red-500' : ''}`}
          />
          {errors.senha && <span className="text-red-500 float-left text-sm">{errors.senha}</span>}
          
          <Button className='w-72 h-12 bg-verde text-white font-bold rounded-md' type="submit" text="Login" />
          <p className='text-cinzaTexto'>
            Ainda não tem uma conta? <Link to="/registrar" className='text-verde hover:underline'>Criar conta</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default FormLogin;
