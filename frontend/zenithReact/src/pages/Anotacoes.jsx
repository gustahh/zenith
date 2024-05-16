import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlocoGrande from '../components/BlocoGrande';
import BlocoMedio from '../components/BlocoMedio';
import { Link, useNavigate } from 'react-router-dom';
import CriarAnotacao from './CriarAnotacao';

function Anotacoes() {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const [blocos, setBlocos] = useState([]);
  const [titulos, setTitulos] = useState([]);
  const [idAnotacao, setIdAnotacao] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [cor, setCor] = useState('');


  useEffect(() => {
    axios.get('http://localhost:3000/blocos/')
      .then((res) => {
        setBlocos(res.data.results);
      });
  }, []);
 
  return (
    <>
      <div className='w-full h-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Anotações</div>
        <CriarAnotacao />
      </div>
      <div className='w-full h-full flex flex-col flex-wrap 
      content-start'>
        {blocos.map((bloco, index) => (
          bloco.tamanho === 'grande' ?
            <Link to={`/anotacoes/${bloco.id_anotacao}`}>
              <BlocoGrande key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} />
            </Link> :
            <Link to={`/anotacoes/${bloco.id_anotacao}`}>
              <BlocoMedio key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} />
            </Link>
        ))}
      </div >
    </>
  )
}

export default Anotacoes