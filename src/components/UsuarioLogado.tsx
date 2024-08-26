import React, { useState, useEffect } from 'react';
import Configuracoes from '../icons/Configuracoes';
import ConfiguracoesVerde from '../icons/ConfiguracoesVerde';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

interface ImagemProps {
  foto: string;
}

const Imagem: React.FC<ImagemProps> = ({ foto }) => {
  const caminho = `/src/img/${foto}`;
  return <img src={caminho} alt={foto} />;
};

const UsuarioLogado: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [foto, setFoto] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:3000/perfil')
        .then((res) => {
          setNome(res.data.usuario.nome);
          setFoto(res.data.usuario.avatar);
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do perfil:', error);
        });
    }
  }, []);

  const abreviarNome = (nome: string, maxLength: number) => {
    if (nome.length > maxLength) {
      return nome.substring(0, maxLength - 3) + '...';
    }
    return nome;
  };

  const nomeAbreviado = abreviarNome(nome, 10);

  return (
    <div className='fixed bottom-0'>
      <div className='w-full h-auto sm:w-full h-16 p-8 flex items-start justify-center font-bold container mx-auto'>
        <div className='justify-start items-start sm:w-full h-full flex items-center justify-between'>
          <div className='w-full flex flex-col sm:flex-row items-center justify-start wrap'>
            <div className='pb-2 sm:pb-0 w-full h-full flex items-center'>
              <div className='w-8 h-8 rounded-full float-left overflow-hidden'>
                <Imagem foto={foto} />
              </div>
              <span className='hidden sm:block text-md font-bold text-cinzaTexto pl-3 mr-3 float-left' title={nome}>
                {nomeAbreviado}
              </span>
            </div>
            <div className='flex items-center justify-start flex-col sm:flex-row pb-2 sm:pb-0'>
              <Link to='/config'>
                <button className='sm:ml-20 float-right'>
                  {location.pathname === "/config" ? <ConfiguracoesVerde /> : <Configuracoes />}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioLogado;
