import axios from 'axios';
import { useState, useEffect } from 'react';
import BlocoGrande from './BlocoGrande';
import BlocoMedio from './BlocoMedio';
import BlocoPequeno from './BlocoPequeno';
import { Link } from 'react-router-dom';
import Masonry from "react-responsive-masonry";

interface Bloco {
    id_anotacao: string;
    tamanho: 'grande' | 'medio' | 'pequeno';
    titulo: string;
    cor: string;
}

function GridArquivadas() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [blocos, setBlocos] = useState<Bloco[]>([]);

    useEffect(() => {
        axios.get<{ results: Bloco[] }>('http://localhost:3000/blocos/arquivadas')
            .then((res) => {
                setBlocos(res.data.results);
            });
    }, []);

    return (
        <>
            <div className='hidden sm:block'>
                <Masonry columnsCount={3} gutter="20px">
                    {blocos.map((bloco) => (
                        <Link to={`/anotacoes/${bloco.id_anotacao}`} key={bloco.id_anotacao}>
                            {bloco.tamanho === 'grande' ? (
                                <BlocoGrande bloco={bloco} />
                            ) : bloco.tamanho === 'medio' ? (
                                <BlocoMedio bloco={bloco} />
                            ) : (
                                <BlocoPequeno bloco={bloco} />
                            )}
                        </Link>
                    ))}
                </Masonry>
            </div>
            <div className='block sm:hidden'>
                <Masonry columnsCount={2} gutter="20px">
                    {blocos.map((bloco) => (
                        <Link to={`/anotacoes/${bloco.id_anotacao}`} key={bloco.id_anotacao}>
                            {bloco.tamanho === 'grande' ? (
                                <BlocoGrande bloco={bloco} />
                            ) : bloco.tamanho === 'medio' ? (
                                <BlocoMedio bloco={bloco} />
                            ) : (
                                <BlocoPequeno bloco={bloco} />
                            )}
                        </Link>
                    ))}
                </Masonry>
            </div>
        </>
    );
}

export default GridArquivadas;
