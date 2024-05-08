import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FraseDoDia() {
    const [frase, setFrase] = useState('');
    const [autor, setAutor] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:3000/frase/ver')
            .then((res) => {
                setFrase(res.data.frase_do_dia);
                setAutor(res.data.autor);
            });
    }, []);
    return (
        <div className='w-full h-36 bg-verdeLimao rounded-md p-5 flex flex-wrap
        '>
            <span className='font-bold text-3xl opacity-70'>
                "{frase}"
            </span>
            <br />
            <span className='font-bold text-md opacity-70'> { autor }</span>
        </div>
    )
}

export default FraseDoDia