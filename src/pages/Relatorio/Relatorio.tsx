// src/components/Relatorio.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Voltar from '../../icons/Voltar';
import GraficoHumorSemanal from './GraficoHumorSemanal';

const Relatorio: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [relatorios, setRelatorios] = useState<any>({});
    const [anotacoes, setAnotacoes] = useState<any[]>([]);
    const [cores, setCores] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                const relatorioRes = await axios.get(`http://localhost:3000/relatorios/relatorioSemanal/${id}`);
                setRelatorios(relatorioRes.data.results[0]);

                const corRes = await axios.get('http://localhost:3000/cores/cor/aleatorio');
                setCores(corRes.data.results[0].nome);

                const anotacoesRes = await axios.get(`http://localhost:3000/notas/${relatorioRes.data.results[0].mes}/${relatorioRes.data.results[0].semanaMes}`);
                setAnotacoes(anotacoesRes.data.results);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        };

        fetchData();
    }, [id]);

    const meses: { [key: number]: string } = {
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
    
    const semanas: { [key: number]: string } = {
        1: "Primeira semana de ",
        2: "Segunda semana de ",
        3: "Terceira semana de ",
        4: "Quarta semana de "
    };

    const diaDaSemana: { [key: number]: string } = {
        1: "Domingo",
        2: "Segunda-feira",
        3: "Terça-feira",
        4: "Quarta-feira",
        5: "Quinta-feira",
        6: "Sexta-feira",
        7: "Sábado",
    };

    const dadosHumor = anotacoes.map(anotacao => ({
        dia: diaDaSemana[anotacao.dia_da_semana],
        humor: anotacao.emocao,
    }));

    return (
        <>
            <div className='w-full h-auto flex items-center justify-start pb-2'>
                <Link to='/relatorio'>
                    <button className='pr-1 flex'>
                        <Voltar className='rounded-md hover:bg-white/20' stroke='#999999' />
                    </button>
                </Link>
                <div className='text-xl font-bold text-cinzaTexto py-1 justify-self-start'>{semanas[relatorios.semanaMes] + meses[relatorios.mes]}</div>
            </div>
            <div>
                <span className='text-xl font-bold text-cinzaTexto py-1 justify-self-start'>Sua semana</span>
                {anotacoes.length > 0 ? (
                    <table>
                        <tbody>
                            {anotacoes.map((anotacao) => (
                                <tr key={anotacao.id} className='border-y-2 border-cinzaTexto/20'>
                                    <td className='text-md text-cinzaTexto py-1 pr-3 justify-self-start'>{diaDaSemana[anotacao.dia_da_semana]}</td>
                                    <td className='text-md text-cinzaTexto py-1 px-3 justify-self-start'>{anotacao.emocao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='text-md text-cinzaTexto py-1 px-3 justify-self-start'>Este relatório não possui dados.</p>
                )}
            </div>
            <div className='mb-2 mt-2'>
                <span className='text-xl font-bold text-cinzaTexto py-1 justify-self-start'>Nesta semana, você se sentiu {relatorios.emocao_pred} mais vezes.</span>
            </div>
            <div className={`w-full h-auto bg-${cores} rounded-md p-2 flex items-center`}>
                <GraficoHumorSemanal dados={dadosHumor} />
            </div>
        </>
    );
}

export default Relatorio;
