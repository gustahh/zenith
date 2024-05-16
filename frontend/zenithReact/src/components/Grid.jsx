import axios from 'axios';
import React , { useState, useEffect } from 'react';
import BlocoGrande from '../components/BlocoGrande';
import BlocoMedio from '../components/BlocoMedio';
import { Link, useNavigate } from 'react-router-dom';
import Masonry from "react-responsive-masonry";

function Grid() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [blocos, setBlocos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/blocos/')
            .then((res) => {
                setBlocos(res.data.results);
            });
    }, []);

    return (
        <Masonry columnsCount={3} gutter="20px">
            {blocos.map((bloco, index) => (
                bloco.tamanho === 'grande' ?
                    <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                        <BlocoGrande key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} />
                    </Link> :
                    <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                        <BlocoMedio key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} />
                    </Link>
            ))}
        </Masonry>
    )
}

export default Grid