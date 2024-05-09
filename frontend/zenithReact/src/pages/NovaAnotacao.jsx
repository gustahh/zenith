import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderNovaAnotacao from '../components/HeaderNovaAnotacao';

function NovaAnotacao() {
  const navigate = useNavigate();
  const [primeiraCor, setPrimeiraCor] = useState([]);
  const [cores, setCores] = useState([]);

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [emocao, setEmocao] = useState('');
  const [data, setData] = useState('');

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/cores/')
      .then((res) => {
        setCores(res.data.results);
        setPrimeiraCor(res.data.results[0].nome)
      })
      .catch((error) => {
        console.error('Erro ao buscar cores:', error);
      });

    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios.get(`http://localhost:3000/notas/${id}`)
      .then((res) => {
        setTitulo(res.data.results[0].titulo);
        setTexto(res.data.results[0].texto);
        setEmocao(res.data.results[0].emocao);
        setData(res.data.results[0].data_edicao);
      })
      .catch((error) => {
        console.error('Erro', error);
        navigate('/home');
      });
  }, [id]);
  return (
    <>
      <div className={`w-full h-dvh bg-${primeiraCor} flex flex-col`}>
        <HeaderNovaAnotacao />

        <div className="flex-1">
          <h1 className='text-4xl font-bold pl-4 pt-4 opacity-70'>{titulo}</h1>
          <h1 className='pl-5 pt-5'>{texto}</h1>
        </div>

        <footer className='w-full h-10 flex'>
          <div className='w-full h-full p-3 flex items-center justify-center 
          font-bold opacity-70 container mx-auto'>
            Alterado em: {data}
          </div>

        </footer>
      </div>
    </>
  )
}

export default NovaAnotacao