import { useState, ChangeEvent, FormEvent } from 'react';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Form2FAProps {
  id: string;
}

interface Values {
  resposta: string;
}

function Form2FA({ id }: Form2FAProps) {
  const [values, setValues] = useState<Values>({ resposta: '' });
  
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, resposta: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.resposta) {
      toast.error('Por favor, preencha a resposta.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/2FA/login/${id}`, values);
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location.reload(); // Recarrega a página após login
    } catch (err: any) {
      const errorMessage = err.response
        ? err.response.data.msg
        : err.request
        ? 'Sem resposta do servidor'
        : err.message;

      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label nome="Resposta" />
      <br />
      <Input type="text" name="resposta" handle={handleInput} placeholder="Digite sua resposta" />
      <Button className='w-full h-12 bg-verde text-white font-bold rounded-md' type="submit" text="Continuar" />
    </form>
  );
}

export default Form2FA;
