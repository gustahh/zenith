import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderNovaAnotacao from '../../components/Anotacoes/HeaderNovaAnotacao';
import Tiptap from '../../components/Tiptap';
import Sobreposicao from '../../components/Sobreposicao';

const NovaAnotacao: React.FC = () => {
    const navigate = useNavigate();
    const [idCor, setIdCor] = useState<string[]>([]);
    const [corDePagina, setCorDePagina] = useState<string>('');
    const [tamanho, setTamanho] = useState<number | null>(null);
    const [cor, setCor] = useState<string>('');

    const [titulo, setTitulo] = useState<string>('');
    const [texto, setTexto] = useState<string>('');
    const [emocao, setEmocao] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [nomeCor, setNomeCor] = useState<string>('');
    const [i, setI] = useState<number>(0);
    const [salvando, setSalvando] = useState<string>('opacity-0');
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Pega informações da nota
        axios.get(`http://localhost:3000/notas/${id}`)
            .then((res) => {
                setTitulo(res.data.results[0].titulo);
                setTexto(res.data.results[0].texto);
                setEmocao(res.data.results[0].emocao);
                setData(res.data.results[0].data_edicao);
            })
            .catch((error) => {
                console.error('Erro', error);
            });

        // Pega informações do bloco da nota
        axios.get(`http://localhost:3000/blocos/bloco/${id}`)
            .then((res) => {
                setCor(res.data.results[0].id_cor);
                setTamanho(res.data.results[0].tamanho);
            })
            .catch((error) => {
                console.error('Erro ao buscar informações do bloco:', error);
            });
    }, [id]);

    useEffect(() => {
        if (cor) {
            // Pega a cor da página quando 'cor' é atualizado
            axios.get(`http://localhost:3000/cores/${cor}`)
                .then((res) => {
                    setCorDePagina(res.data.results[0].nome);
                })
                .catch((error) => {
                    console.error('Erro ao buscar cor da página:', error);
                });
        }
    }, [cor]);

    const handleClickPincel = () => {
        setI(prevI => prevI + 1);

        // Atualiza a cor da página quando o botão é clicado
        axios.get(`http://localhost:3000/cores/`)
            .then((res) => {
                setIdCor(res.data.results.map((item: any) => item.id));
                setCorDePagina(res.data.results[i].nome);

                // Salva no banco de dados a nova cor após 2s
                setTimeout(() => {
                    axios.put(`http://localhost:3000/blocos/editar/cor/${id}`, {
                        id_cor: res.data.results[i].id
                    })
                        .then(() => {
                            setSalvando('opacity-100');
                            setTimeout(() => setSalvando('opacity-0'), 3000); // 3 segundos
                        })
                        .catch((error) => {
                            console.error('Erro ao salvar cor:', error);
                        });
                }, 2000);
            })
            .catch((error) => {
                console.error('Erro ao buscar cores:', error);
            });
    };

    const handleClickCores = (event: React.MouseEvent<HTMLDivElement>) => {
      const tabIndex = event.currentTarget.getAttribute("tabindex");
      const name = event.currentTarget.getAttribute("name");
      if (tabIndex && name) {
          setCorDePagina(name);
  
          // Salva no banco de dados a nova cor após 1s
          setTimeout(() => {
              axios.put(`http://localhost:3000/blocos/editar/cor/${id}`, {
                  id_cor: tabIndex
              })
                  .then(() => {
                      setSalvando('opacity-100');
                      setTimeout(() => setSalvando('opacity-0'), 3000); // 3 segundos
                  })
                  .catch((error) => {
                      console.error('Erro ao salvar cor:', error);
                  });
          }, 1000);
      }
  };

    const handleTituloChange = (event: ChangeEvent<HTMLInputElement>) => {
        const novoTitulo = event.target.value;
        setTitulo(novoTitulo);
        setTimeout(() => {
            axios.put(`http://localhost:3000/notas/edit/titulo/${id}`, {
                titulo: novoTitulo
            })
                .then(() => {
                    setSalvando('opacity-100');
                    setTimeout(() => setSalvando('opacity-0'), 1000); // 1 segundo
                })
                .catch((error) => {
                    console.error('Erro ao salvar título:', error);
                });
        }, 1000);
    };

    // Converter para objeto Date
    const dataObjeto = new Date(data);

    // Extrair informações de data e hora
    const dia = dataObjeto.getDate();
    const mes = dataObjeto.getMonth() + 1; // Mês começa do zero
    const ano = dataObjeto.getFullYear();
    const hora = dataObjeto.getHours();
    const minutos = dataObjeto.getMinutes();

    // Formatar a data no formato desejado
    const dataFormatada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano} às ${hora}:${minutos < 10 ? '0' : ''}${minutos}`;

    return (
        <>
            <div className='w-full h-full absolute z-20 overflow-hidden'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className={`w-screen h-screen sm:w-4/5 sm:h-4/5 bg-${corDePagina} rounded-md flex flex-col`}>
                        <HeaderNovaAnotacao 
                            salvando={salvando} 
                            onClickPincel={handleClickPincel} 
                            onClickCores={handleClickCores} 
                            color={`bg-${corDePagina}`}
                            emocao={emocao} 
                            tamanho={tamanho || 0} 
                        />
                        <div className="flex-1 prose">
                            <input 
                                className='w-auto h-auto text-4xl font-bold pl-4 pt-4 opacity-70 
                                bg-transparent border-none focus:outline-none'
                                value={titulo}
                                onChange={handleTituloChange}
                            />
                            <div className='pl-5 pt-5'>
                                <Tiptap />
                            </div>
                        </div>
                        <footer className='w-full h-10 flex'>
                            <div className='w-full h-full p-3 flex items-center justify-center 
                                font-bold opacity-70 container mx-auto'>
                                Alterado em: {dataFormatada}
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            <Sobreposicao />
        </>
    );
};

export default NovaAnotacao;
