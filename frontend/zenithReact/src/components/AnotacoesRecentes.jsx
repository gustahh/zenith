import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlocoGrande from './BlocoGrande';
import BlocoMedio from './BlocoMedio';
import Bloco from './Bloco';
import { Link, useNavigate } from 'react-router-dom';


function Anotacoes() {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const [blocos, setBlocos] = useState([]);
  const [titulos, setTitulos] = useState([]);
  const [idAnotacao, setIdAnotacao] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [cor, setCor] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:3000/blocos/recentes')
      .then((res) => {
        setBlocos(res.data.results);
      });
  }, []);
  return (
    <>
      <div className='text-xl font-bold text-cinzaTexto py-2'>Últimas anotações</div>
      <div className='w-full h-full flex flex-row flex-wrap 
      content-start'>
        {blocos.map((bloco, index) => (
            <Link to={`/anotacoes/${bloco.id_anotacao}`}>
              <Bloco key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} />
            </Link>
        ))}
      </div >
    </>
  )
}

export default Anotacoes