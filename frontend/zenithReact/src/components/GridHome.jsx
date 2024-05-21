import axios from 'axios';
import React , { useState, useEffect } from 'react';
import Bloco from '../components/BlocoMedio';
import { Link, useNavigate } from 'react-router-dom';

import Masonry from "react-responsive-masonry";

function Grid() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
    const [blocos, setBlocos] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/blocos/recentes')
        .then((res) => {
          setBlocos(res.data.results);
        });
    }, []);

    return (
        <Masonry columnsCount={3} gutter="20px">
            {blocos.map((bloco, index) => (
                    <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                        <Bloco key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao}/>
                    </Link>
            ))}
        </Masonry>
    )
}

export default Grid