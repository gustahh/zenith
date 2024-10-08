import { useState, useEffect } from 'react';
import axios from 'axios';

interface FraseData {
    frase_do_dia: string;
    autor: string;
}

interface CorData {
    cor: {
        cor: string;
    };
}

function FraseDoDia() {
    const [frase, setFrase] = useState<string>('');
    const [autor, setAutor] = useState<string>('');
    const [cor, setCor] = useState<string>('');

    useEffect(() => {
        axios.get<FraseData>('http://localhost:3000/frase/ver')
            .then((res) => {
                setFrase(res.data.frase_do_dia);
                setAutor(res.data.autor);
            });

        axios.get<CorData>('http://localhost:3000/cores/cor/aleatorio')
            .then((res) => {
                setCor(res.data.cor.cor);
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
    );
}

export default FraseDoDia;
