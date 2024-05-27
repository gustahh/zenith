import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Voltar from '../icons/Voltar';

function Relatorio() {
    const { id } = useParams();

    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [relatorios, setRelatorios] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/relatorios/relatorioSemanal/${id}`)
            .then((res) => {
                setRelatorios(res.data.results[0]);
            });
    }, []);

    let meses = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    };
    let semanas = {
        1: "Primeira semana de ",
        2: "Segunda semana de ",
        3: "Terceira semana de ",
        4: "Quarta semana de "
    }
    return (
        <div className='w-full h-auto flex items-center justify-start pb-2'>
            <Link to='/relatorio'>
                <button className='pr-1 flex'>
                    <Voltar className='rounded-md hover:bg-white/20' stroke='#999999' />
                </button>
            </Link>
            <div className='text-xl font-bold text-cinzaTexto py-1 justify-self-start'>{semanas[relatorios.semanaMes] + meses[relatorios.mes]}</div>
        </div>
    )
}

export default Relatorio