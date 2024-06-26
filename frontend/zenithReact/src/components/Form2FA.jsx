import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Label from './Label';
import axios from 'axios';
import { toast } from 'react-toastify';

function Form2FA(props) {
  const id = props.id;

  // Inicializa o estado com resposta vazia
  const [values, setValues] = useState({
    resposta: '',
  });

  const handleInput = (event) => {
    // Atualiza apenas a propriedade resposta dentro do objeto values
    setValues(prev => ({ ...prev, resposta: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validação não parece estar sendo utilizada no momento

    axios.post(`http://localhost:3000/2FA/login/${id}`, values)  // Envia values diretamente ao servidor
      .then(res => {
        // Extrai o token JWT da resposta
        const token = res.data.token;
        // Armazena o token no localStorage
        localStorage.setItem('token', token);
        window.location.reload();  // Recarrega a página após login
      })
      .catch(err => {
        if (err.response) {
          // Se houver uma resposta do servidor, exiba a mensagem de erro
          toast.error(err.response.data.msg);
        } else if (err.request) {
          // Se a requisição foi feita, mas não houve resposta do servidor
          console.log('Erro: Sem resposta do servidor');
          toast.error('Sem resposta do servidor');
        } else {
          // Se ocorreu um erro antes da requisição ser feita
          toast.error(err.message);
        }
      });
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <Label nome="Resposta" />
      <br />
      <Input type="text" name="resposta" handle={handleInput} placeholder="Digite sua resposta" />
      <Button className='w-full h-12 bg-verde text-white font-bold rounded-md' type="submit" text="Continuar" />
    </form>
  );
}

export default Form2FA;
