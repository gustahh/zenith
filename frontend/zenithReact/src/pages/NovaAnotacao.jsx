import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HeaderNovaAnotacao from '../components/HeaderNovaAnotacao';

function NovaAnotacao() {
  const [primeiraCor, setPrimeiraCor] = useState([]);
  const [cores, setCores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cores/')
      .then((res) => {
        setCores(res.data.results);
        setPrimeiraCor(res.data.results[0].nome)
      })
      .catch((error) => {
        console.error('Erro ao buscar cores:', error);
      });
  }, []);
  return (
    <>
      <div className={`w-full h-dvh bg-${primeiraCor}`}>
        <HeaderNovaAnotacao />
      </div>
    </>
  )
}

export default NovaAnotacao