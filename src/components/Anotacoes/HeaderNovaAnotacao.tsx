import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Voltar from '../../icons/Voltar';
import Pincel from '../../icons/Pincel';
import Nuvem from '../../icons/Nuvem';
import Atualizando from '../../icons/Atualizando';
import Face from '../../icons/Face';
import { useParams, useNavigate } from 'react-router-dom';
import Descer from '../../icons/Descer';
import usePreviousLocation from '../../routes/hook';
import Bloco from '../../icons/Bloco';

// Tipos para as props do componente
interface HeaderNovaAnotacaoProps {
    salvando: string;
    onClickPincel: () => void;
    onClickCores: (event: React.MouseEvent<HTMLDivElement>) => void; // Alterado para HTMLDivElement
    color: string;
    emocao: string;
    tamanho: number;
}

// Tipo para a cor
interface Cor {
    id: string;
    nome: string;
}

const HeaderNovaAnotacao: React.FC<HeaderNovaAnotacaoProps> = (props) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const prevLocation = usePreviousLocation();

    const [valorScale, setValorScale] = useState<number>(0);
    const [valorScaleTamanho, setValorScaleTamanho] = useState<number>(0);
    const [valorScaleCores, setValorScaleCores] = useState<number>(0);
    const [tabIndexClicado, setTabIndexClicado] = useState<string>(props.emocao);
    const [tabIndexTamanho, setTabIndexTamanho] = useState<string>(props.tamanho.toString());
    const [cores, setCores] = useState<Cor[]>([]);
    const [n, setN] = useState<number>(0);
    const [salvando, setSalvando] = useState<string>('opacity-0');

    useEffect(() => {
        axios.get<{ results: Cor[] }>('http://localhost:3000/cores/')
            .then((res) => {
                setCores(res.data.results);
            })
            .catch((error) => {
                console.error('Erro ao buscar cores:', error);
            });

        setTabIndexClicado(props.emocao);
        setTabIndexTamanho(props.tamanho.toString());

        const tamanhoNMap: { [key: string]: number } = {
            'Muito feliz': -1,
            'Feliz': -47,
            'Neutro': -30,
            'Triste': -38,
            'Muito triste': 5,
        };

        setN(tamanhoNMap[props.emocao] || 0);

        const tamanhoNSizeMap: { [key: string]: number } = {
            'Grande': -1,
            'Medio': -47,
            'Pequeno': -30,
        };

        setN(tamanhoNSizeMap[props.tamanho.toString()] || 0);
    }, [props.emocao, props.tamanho]);

    const handleClickPincel = () => {
        props.onClickPincel();
    };

    const handleClickCores = (event: React.MouseEvent<HTMLDivElement>) => {
        props.onClickCores(event);
    };

    const voltarPagina = () => {
        if (prevLocation.pathname === "/home") {
            navigate('/home');
        } else {
            navigate('/anotacoes');
        }
    };

    const scale = () => {
        setValorScale(prev => (prev === 1 ? 0 : 1));
    };

    const scaleTamanho = () => {
        setValorScaleTamanho(prev => (prev === 1 ? 0 : 1));
    };

    const scaleCores = () => {
        setValorScaleCores(prev => (prev === 1 ? 0 : 1));
    };

    const handleClickOpcoes = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const tabIndex = (event.target as HTMLDivElement).getAttribute("tabindex");
        if (tabIndex) {
            setTabIndexClicado(tabIndex);
            const opcaoNMap: { [key: string]: number } = {
                'Muito feliz': -1,
                'Feliz': -47,
                'Neutro': -30,
                'Triste': -38,
                'Muito triste': 5,
            };
            setN(opcaoNMap[tabIndex] || 0);

            axios.put(`http://localhost:3000/notas/edit/humor/${id}`, {
                emocao: tabIndex
            })
                .then(() => {
                    setSalvando('opacity-100');
                    setTimeout(() => {
                        setSalvando('opacity-0');
                    }, 1000);
                })
                .catch((error) => {
                    console.error('Erro ao editar emoção:', error);
                });
        }
    };

    const handleClickTamanho = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const tabIndexTamanho = (event.target as HTMLDivElement).getAttribute("tabindex");
        if (tabIndexTamanho) {
            setTabIndexTamanho(tabIndexTamanho);
            const tamanhoNSizeMap: { [key: string]: number } = {
                'grande': -10,
                'medio': -47,
                'pequeno': -30,
            };
            setN(tamanhoNSizeMap[tabIndexTamanho] || 0);

            axios.put(`http://localhost:3000/blocos/editar/tamanho/${id}`, {
                tamanho: tabIndexTamanho
            })
                .then(() => {
                    setSalvando('opacity-100');
                    setTimeout(() => {
                        setSalvando('opacity-0');
                    }, 1000);
                })
                .catch((error) => {
                    console.error('Erro ao editar tamanho de nota:', error);
                });
        }
    };

    return (
        <header className='w-full h-10 flex'>
            <div className='w-full h-full p-3 flex items-center justify-between'>
                <button onClick={voltarPagina}>
                    <Voltar className='opacity-70 rounded-md hover:bg-white/20' stroke='#000000' />
                </button>

                <div>
                    <span className='pl-3 opacity-70 font-bold justify-self-start'>Anotação</span>
                </div>
                <div className={`flex items-center ml-auto ${props.salvando} ${salvando}`}>
                    <Nuvem className={`mr-1 opacity-70`} stroke='#000000' />
                    <span className='font-bold text-sm opacity-70'>Salvando...</span>
                </div>
                <button className='ml-3 p-1 rounded-md hover:bg-white/20' onClick={scaleCores}>
                    <Pincel className='opacity-70' stroke='#000000' />
                    <div className={`w-32 h-auto p-1 absolute isolate aspect-video rounded-md 
                    bg-white/30 backdrop-blur-sm ring-1 ring-black/5 z-10 cursor-pointer transition ease-in-out duration-400 mt-2`} style={{ transformOrigin: 'top center', transform: `translateX(-50px) scale(${valorScaleCores})` }} >
                        <div className='grid grid-cols-4'>
                            {cores.map((cor) => (
                                <div className={`w-6 h-6 rounded-full bg-${cor.nome} m-1`} tabIndex={parseInt(cor.id)} data-name={cor.nome} key={cor.id} onClick={handleClickCores}></div>
                            ))}
                        </div>
                    </div>
                </button>

                <button className='ml-2 flex items-center cursor-pointer p-1 rounded-md hover:bg-white/20' onClick={scaleTamanho}>
                    <Bloco className='opacity-70 float-left' stroke='#000000' />
                    <div className='w-26 h-5 ml-2 font-bold opacity-70 cursor-pointer flex items-center'>
                        {tabIndexTamanho === 'Grande' ? (
                            <span className='float-left mr-1'>Grande</span>
                        ) : tabIndexTamanho === 'Medio' ? (
                            <span className='float-left mr-1'>Médio</span>
                        ) : (
                            <span className='float-left mr-1'>Pequeno</span>
                        )}
                        <Descer className='opacity-70 float-left' stroke='#000000' />
                    </div>
                    <div className={`w-32 h-auto mt-28 absolute isolate aspect-video rounded-md 
                    bg-white/10 backdrop-blur-sm ring-1 ring-black/5 z-10 cursor-pointer transition ease-in-out duration-400`} style={{ transformOrigin: 'top center', transform: `translateX(40px) scale(${valorScaleTamanho})` }}>
                        <div className='flex items-center justify-center'>
                            <div tabIndex={parseInt('Grande')} className='w-10 h-10 bg-gray-200 rounded-md border' onClick={handleClickTamanho}></div>
                            <div tabIndex={parseInt('Medio')} className='w-8 h-8 bg-gray-400 rounded-md border mx-2' onClick={handleClickTamanho}></div>
                            <div tabIndex={parseInt('Pequeno')} className='w-6 h-6 bg-gray-600 rounded-md border' onClick={handleClickTamanho}></div>
                        </div>
                    </div>
                </button>

                <button onClick={handleClickPincel} className='ml-2 p-1 rounded-md hover:bg-white/20'>
                    <Face className='opacity-70 float-left' stroke='#000000' />
                    <div className='w-40 h-32 absolute mt-1 ml-4 font-bold opacity-70 cursor-pointer z-20'>
                        <div className='grid grid-cols-5'>
                            <div className={`col-span-1 w-12 h-12 rounded-full bg-yellow-200`} tabIndex={-1}></div>
                            <div className={`col-span-1 w-12 h-12 rounded-full bg-red-200`} tabIndex={-1}></div>
                            <div className={`col-span-1 w-12 h-12 rounded-full bg-blue-200`} tabIndex={-1}></div>
                            <div className={`col-span-1 w-12 h-12 rounded-full bg-green-200`} tabIndex={-1}></div>
                            <div className={`col-span-1 w-12 h-12 rounded-full bg-gray-200`} tabIndex={-1}></div>
                        </div>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default HeaderNovaAnotacao;
