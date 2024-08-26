import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sobreposicao from '../../components/Sobreposicao';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Fechar from '../../icons/Fechar';

interface MetaResponse {
  meta: string;
  data_expec: string;
}

const NovaMeta: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [textoMeta, setTextoMeta] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [meta, setMeta] = useState<string>('');
    const [dataExpec, setDataExpec] = useState<string>('');
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() => {
        axios.get<MetaResponse>(`http://localhost:3000/metas/${id}`)
            .then(res => {
                setTextoMeta(res.data.meta);
                setData(res.data.data_expec);
            })
            .catch(err => {
                toast.error("Erro ao carregar os dados.");
            });
    }, [id]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'meta') {
            setMeta(value);
        } else if (name === 'dataExpec') {
            setDataExpec(value);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (meta) {
            axios.put(`http://localhost:3000/metas/editar/${id}`, { meta })
                .then(res => {
                    navigate('/metas');
                    toast.success("Você alterou uma meta!");
                })
                .catch(err => {
                    handleError(err);
                });
        }
        if (dataExpec) {
            axios.put(`http://localhost:3000/metas/editar/data/${id}`, { dataExpec })
                .then(res => {
                    navigate('/metas');
                    toast.success("Você alterou uma meta!");
                })
                .catch(err => {
                    handleError(err);
                });
        }
    };

    const handleError = (err: any) => {
        if (err.response) {
            toast.error(err.response.data.msg);
        } else if (err.request) {
            console.log('Erro: Sem resposta do servidor');
            toast.error('Sem resposta do servidor');
        } else {
            toast.error(err.message);
        }
    };

    return (
        <>
            <div className='w-full h-full absolute z-20 overflow-hidden'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-1/4 h-auto bg-ice dark:bg-cinzaEscuro p-5 rounded-md'>
                        <Link to='/metas'>
                            <div className='w-full h-5 flex items-center justify-end cursor-pointer'>
                                <Fechar />
                            </div>
                        </Link>
                        <div className='flex justify-center'>
                            <span className='text-xl font-bold text-cinzaTexto'>Editar meta</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <Label nome="Meta" />
                            <Input 
                                type="text" 
                                name="meta" 
                                placeholder={textoMeta} 
                                handle={handleInput} 
                            />
                            <Label nome="Concluir até:" />
                            <Input 
                                type="date" 
                                name="dataExpec" 
                                handle={handleInput} 
                            />
                            <Button 
                                className='w-80 h-12 bg-verde text-white font-bold rounded-md'
                                type="submit" 
                                text="Editar meta" 
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Sobreposicao />
            <ToastContainer />
        </>
    );
};

export default NovaMeta;
