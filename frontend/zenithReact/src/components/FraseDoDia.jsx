import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FraseDoDia() {
    const [frase, setFrase] = useState('');
    const [autor, setAutor] = useState('');
    const [cor, setCor] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/frase/ver')
            .then((res) => {
                setFrase(res.data.frase_do_dia);
                setAutor(res.data.autor);
                setCor(res.data.cor);
            });
    }, []);
    return (
        <div className={`w-full h-auto bg-${cor} rounded-md p-5 flex flex-wrap`}>
            <div className='flex flex-col'>
                <span className='font-bold text-2xl opacity-70'>
                    "{frase}"
                </span>
                <span className='font-bold text-md opacity-70'> {autor}</span>
            </div>

            
        </div>
    )
}

export default FraseDoDia