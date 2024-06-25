import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Habilitar2FA() {
    const navigate = useNavigate();
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [DF, setDF] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get('http://localhost:3000/2FA/checar')
            .then((res) => {
                setDF(res.data.msg);
            });
    }, []);

    const handleSelectChange = (event) => {
        setOpcaoSelecionada(event.target.value);
                if (event.target.value === 'true') {
                    axios.post('http://localhost:3000/2FA/habilitar')
                    .then((res) => {
                        navigate('/config/privacidadeconta/2FA/pergunta');
                    });
                } else {
                    axios.delete('http://localhost:3000/2FA/desabilitar')
                    .then((res) => {
                        console.log('2FA Desabilitada');
                        setDF('false');
                    });
                }
    };


    return (
        <>
            <select value={DF} onChange={handleSelectChange} name="habilita" className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'  >
                <option value="true">Habilitado</option>
                <option value="false" >Desabilitado</option>
            </select>
        </>

    )
}

export default Habilitar2FA