import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Habilitar2FA(props) {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [perguntas, setPerguntas] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get('http://localhost:3000/2FA/perguntas')
            .then((res) => {
                setPerguntas(res.data.results);
            });
    }, []);

    const handleSelectChange = (event) => {
        setOpcaoSelecionada(event.target.value);

    };


    return (
        <>
            <select onChange={props.handle} name="pergunta" className='p-0 flex w-auto h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'  >
                {perguntas.map((pergunta) => (
                    <option key={pergunta.id} value={pergunta.id}>
                        {pergunta.pergunta}
                    </option>
                ))}
            </select>
        </>

    )
}

export default Habilitar2FA