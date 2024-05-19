import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderNovaAnotacao from '../components/HeaderNovaAnotacao';
import Tiptap from '../components/Tiptap';
import Sobreposicao from '../components/Sobreposicao';

function NovaAnotacao() {
  const navigate = useNavigate();
  const [idCor, setIdCor] = useState([]);
  const [corDePagina, setCorDePagina] = useState([]);
  const [tamanho, setTamanho] = useState([]);
  const [cor, setCor] = useState([]);

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [emocao, setEmocao] = useState('');
  const [data, setData] = useState('');
  const [i, setI] = useState(0);
  const [salvando, setSalvando] = useState('opacity-0');
  const { id } = useParams();



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
    axios.get(`http://localhost:3000/notas/bloco/${id}`)
      .then((res) => {
        setCor(res.data.results[0].id_cor);
        setTamanho(res.data.results[0].tamanho);
      })
      .catch((error) => {
        console.error('Erro ao buscar informações do bloco:', error);
      });

    // Pega a cor da página uma vez quando a página é carregada
    axios.get(`http://localhost:3000/cores/${cor}`)
      .then((res) => {
        setCorDePagina(res.data.results[0].nome);
      })
      .catch((error) => {
        console.error('Erro ao buscar cor da página:', error);
      });
  }, [id, cor]); // Adicione 'cor' como uma dependência para que seja atualizado quando 'cor' mudar

  const handleClickPincel = () => {

    setI(prevI => prevI + 1);

    console.log(i);

    // Atualiza a cor da página quando o botão é clicado
    axios.get(`http://localhost:3000/cores/`)
      .then((res) => {
        setIdCor(res.data.results[i].id);
        setCorDePagina(res.data.results[i].nome);

        // Salva no banco de dados a nova cor após 2s
        setTimeout(() => {
          axios.put(`http://localhost:3000/blocos/editar/cor/${id}`, {
            id_cor: res.data.results[i].id
          })
            .then((res) => {
              setSalvando(prevSalvando => 'opacity-100');
              setTimeout(() => {
                setSalvando(prevSalvando => 'opacity-0');
              }, 3000) //3 segundos
            })
            .catch((error) => {
              console.error('Erro ao buscar cores:', error);
            });
        }, 2000)

      })
      .catch((error) => {
        console.error('Erro ao buscar cores:', error);
      });
  };

  const handleTituloChange = (event) => {
    const novoTitulo = event.target.value;
    setTitulo(novoTitulo);
    setTimeout(() => {
      axios.put(`http://localhost:3000/notas/edit/titulo/${id}`, {
        titulo: novoTitulo
      })
        .then((res) => {
          setSalvando(prevSalvando => 'opacity-100');
          setTimeout(() => {
            setSalvando(prevSalvando => 'opacity-0');
          }, 1000) //3 segundos
        })
        .catch((error) => {
          console.error('Erro ao buscar cores:', error);
        });
    }, 1000)
  };


  // Converter para objeto Date
  var dataObjeto = new Date(data);

  // Extrair informações de data e hora
  var dia = dataObjeto.getDate();
  var mes = dataObjeto.getMonth() + 1; // Mês começa do zero
  var ano = dataObjeto.getFullYear();
  var hora = dataObjeto.getHours();
  var minutos = dataObjeto.getMinutes();

  if (mes < 10) {
    mes = '0' + mes;
  }

  // Formatar a data no formato desejado
  var dataFormatada = dia + "/" + mes + "/" + ano + " às " + hora + ":" + (minutos < 10 ? '0' : '') + minutos;

  return (
    <>

      <div className='w-full h-full absolute z-20 overflow-hidden'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className={`w-4/5 h-4/5 bg-${corDePagina} rounded-md flex flex-col`}>
            <HeaderNovaAnotacao salvando={`${salvando}`}
              onClickPincel={handleClickPincel} color={`bg-${corDePagina}`}
              emocao={`${emocao}`} />

            <div className="flex-1 prose">
              <input className='w-auto h-auto text-4xl font-bold pl-4 pt-4 opacity-70 
          bg-transparent border-none focus:outline-none'
                value={titulo}
                onChange={handleTituloChange}></input>
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
  )
}

export default NovaAnotacao