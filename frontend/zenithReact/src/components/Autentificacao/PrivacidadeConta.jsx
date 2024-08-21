import React, { useState, useEffect } from 'react';
import Habilitar2FA from './Habilitar2FA';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import axios from 'axios';

function PrivacidadeConta() {
  const [DF, setDF] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:3000/2FA/checar')
      .then((res) => {
        setDF(res.data.msg);
      });
  }, []);
  let visibilidade = '';

  if (DF === 'true') {
    visibilidade = 'block';
  } else {
    visibilidade = 'hidden';
  }
  return (
    <>
      <>
        <div>
          <div className='flex'>
            <span className='flex w-full h-text-xl font-bold text-cinzaTexto p-0 m-0 pb-3'>
              Privacidade e Segurança
            </span>
          </div>

          <div className='border-y-2 border-cinzaTexto/10 p-4'>
            <div className='flex items-center justify-between'>
              <div className='w-full flex items-center justify-between'>
                <span className='text-md font-bold text-cinzaTexto p-0 m-0 pb-3'>Autentificação de dois fatores</span>
                <Habilitar2FA />
              </div>
            </div>

            <div>
              <p className='pb-3 w-full text-xs leading-3 text-cinzaTexto'>Proteja a sua conta com mais
                uma barreira de Segurança.</p>
            </div>

            <div className={`${visibilidade}`}>
              <div className='flex items-center justify-between'>
                <span className='text-md font-bold text-cinzaTexto p-0 m-0 pb-3'>
                  Escolha sua pergunta
                </span>
                <Link to='2FA/pergunta'>
                  <Button text="Editar" className="w-auto h-auto bg-transparent font-bold 
                text-branco p-2 pl-1 rounded-md"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default PrivacidadeConta