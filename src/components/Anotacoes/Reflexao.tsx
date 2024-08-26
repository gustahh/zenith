import { useState, useEffect } from 'react';
import axios from 'axios';

function Reflexao() {
    const [frase, setFrase] = useState<string>('');
    const [cor, setCor] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch frase
                const fraseResponse = await axios.get<{ frase: string }>('http://localhost:3000/reflexao/ver');
                setFrase(fraseResponse.data.frase);

                // Fetch cor
                const corResponse = await axios.get<{ cor: { cor: string } }>('http://localhost:3000/cores/cor/aleatorio');
                setCor(corResponse.data.cor.cor);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
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
    );
}

export default Reflexao;
