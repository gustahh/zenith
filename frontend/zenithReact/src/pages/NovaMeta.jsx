import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Sobreposicao from '../components/Sobreposicao';
import Input from '../components/Input';
import Button from '../components/Button';
import Label from '../components/Label';
import Fechar from '../icons/Fechar';



function NovaMeta() {

  const [values, setValues] = useState({
    meta: '',
    dataExpec: '',
  });
  console.log(values);
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    // Valida os campos

    axios.post('http://localhost:3000/metas/criar', values)
      .then(res => {
        navigate('/metas');
        toast.success("Você criou uma meta!");
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
    <>
      <div className='w-full h-full absolute z-20 overflow-hidden'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-1/4 h-auto bg-ice dark:bg-cinzaEscuro p-5 rounded-md'>
            <Link to='/metas'>
              <div className='w-full h-5 flex items-center justify-end cursor-pointer'>
                <Fechar />
              </div>
            </Link>
            <div className='flex justify-center'>
              <span className='text-xl font-bold text-cinzaTexto'>Criar nova meta</span>
            </div>
            <form onSubmit={handleSubmit}>
              <Label nome="Meta" />
              <Input type="text" name="meta" placeholder="Digite sua meta" handle={handleInput}/>
              <Label nome="Concluir até:" />
              <Input type="date" name="dataExpec" handle={handleInput}/>
              <Button className='w-80 h-12 bg-verde text-white font-bold rounded-md'
                type="submit" text="Nova meta" />
            </form>

          </div>
        </div>

      </div>
      <Sobreposicao />
    </>


  )
}

export default NovaMeta