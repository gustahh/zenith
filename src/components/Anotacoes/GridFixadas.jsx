import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BlocoGrandeFixado from './BlocoGrandeFixado';
import BlocoMedioFixado from './BlocoMedioFixado';
import BlocoPequenoFixado from './BlocoPequenoFixado';
import { Link, useNavigate } from 'react-router-dom';
import Masonry from "react-responsive-masonry";

function GridArquivadas() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [blocos, setBlocos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/blocos/fixadas')
            .then((res) => {
                setBlocos(res.data.results);
            });
    }, []);

    return (
        <>
            <div className='hidden sm:block'>
                <Masonry columnsCount={3} gutter="20px">
                    {blocos.map((bloco, index) => (
                        bloco.tamanho === 'grande' ?
                            <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                                <BlocoGrandeFixado key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao} />
                            </Link> : bloco.tamanho === 'medio' ?
                                <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                                    <BlocoMedioFixado key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao} />
                                </Link> :
                                <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                                    <BlocoPequenoFixado key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao} />
                                </Link>
                    ))}
                </Masonry>
            </div>
            <div className='block sm:hidden'>
                <Masonry columnsCount={2} gutter="20px">
                    {blocos.map((bloco, index) => (
                        bloco.tamanho === 'grande' ?
                            <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                                <BlocoGrandeFixado key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao} />
                            </Link> : bloco.tamanho === 'medio' ?
                                <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                                    <BlocoMedioFixado key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao} />
                                </Link> :
                                <Link to={`/anotacoes/${bloco.id_anotacao}`}>
                                    <BlocoPequenoFixado key={index} bloco={bloco} titulo={bloco.titulo} cor={bloco.cor} id={bloco.id_anotacao} />
                                </Link>
                    ))}
                </Masonry>
            </div>
        </>



    )
}

export default GridArquivadas