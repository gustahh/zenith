import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FraseDoDia() {
    const [frase, setFrase] = useState('');
    const [cor, setCor] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/reflexao/ver')
            .then((res) => {
                setFrase(res.data.frase);
                
            });
            axios.get('http://localhost:3000/cores/cor/aleatorio')
            .then((res) => {
                setCor(res.data.cor.cor);
                
            });
    }, []);
    return (
        <div className={`w-full h-auto bg-${cor} rounded-md p-5 mb-2 flex flex-wrap`}>
            <div className='flex flex-col'>
            <span className='font-bold text-xl opacity-70'>
                    Reflexão:
                </span>
                <span className='font-bold text-4xl opacity-70'>
                    {frase}
                </span>
            </div>

            
        </div>
    )
}

export default FraseDoDia