import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Lixeira from '../icons/Lixeira';
import Editar from '../icons/Editar';

function MostrarMetas() {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [metas, setMetas] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3000/metas')
            .then((res) => {
                setMetas(res.data.results);
            });
    };

    const formatarData = (data) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(data).toLocaleDateString('pt-BR', options);
    };

    const marcarMeta = (event) => {
        axios.get(`http://localhost:3000/metas/editar/status/${event.target.name}`)
            .then((res) => {
                fetchData(); //recarrega metas
                toast.success(res.data.msg);
            });
    }
    return (
        <>
            <div>
                {metas.length > 0 ? (
                    <div>
                        {metas.map((meta) => (
                            <div key={meta.id}>
                                {meta.statusMeta === 'não realizado' ? (
                                    <div className='flex items-center'>
                                        <input type="checkbox" name={meta.id} className='form-checkbox bg-red-500 h-5 w-5 rounded-full accent-verde opacity-30 checked:opacity-100' onChange={marcarMeta} />
                                        <label htmlFor={meta.id}>
                                            <span className="text-md ml-2 text-cinzaTexto">{meta.meta}</span>
                                            <span className="text-md ml-2 text-verde pr-3">Até {formatarData(meta.data_expec)}</span>
                                        </label>
                                        <div className='flex items-center'>
                                            <Link to={`/metas/editar/${meta.id}`}>
                                                <button className='rounded-sm hover:dark:bg-white/20 hover:bg-black/20'>
                                                    <Editar className="" stroke="#999999" />
                                                </button>
                                            </Link>
                                            <Link to={`/metas/deletar/${meta.id}`}>
                                                <button className='rounded-sm ml-2 hover:dark:bg-white/20 hover:bg-black/20'>
                                                    <Lixeira className="" stroke="#999999" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='flex items-center'>
                                        <input type="checkbox" name={meta.id} defaultChecked className='form-checkbox bg-red-500 h-5 w-5 rounded-full accent-verde opacity-30 checked:form-checkbox checked:h-5 checked:w-5 checked:rounded-full checked:accent-verde checked:opacity-100' onChange={marcarMeta} />
                                        <label htmlFor={meta.id}>
                                            <span className="text-md ml-2 text-cinzaTexto line-through">{meta.meta}</span>
                                            <span className="text-md ml-2 text-verde pr-3">Meta cumprida</span>
                                        </label>
                                        <div className='flex items-center'>
                                            <Link to={`/metas/deletar/${meta.id}`}>
                                                <button className='rounded-sm hover:dark:bg-white/20 hover:bg-black/20 '>
                                                    <Lixeira className="" stroke="#999999" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Você ainda não possui metas</p>
                )}
            </div>
        </>
    )
}

export default MostrarMetas