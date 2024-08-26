import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Lixeira from '../../icons/Lixeira';
import Editar from '../../icons/Editar';

// Definindo o tipo para uma meta
interface Meta {
  id: string;
  meta: string;
  statusMeta: 'realizado' | 'não realizado';
  data_expec: string;
}

// Definindo o tipo para o estado das metas
interface MetasState {
  metas: Meta[];
}

function MostrarMetas() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const token = localStorage.getItem('token');
  
  // Configurando o cabeçalho do axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/metas');
      setMetas(res.data.results);
    } catch (err) {
      toast.error('Erro ao carregar metas');
    }
  };

  const formatarData = (data: string) => {
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(data).toLocaleDateString('pt-BR', options);
};


  const marcarMeta = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      await axios.get(`http://localhost:3000/metas/editar/status/${event.target.name}`);
      fetchData(); // Recarrega metas
      toast.success('Meta atualizada com sucesso');
    } catch (err) {
      toast.error('Erro ao marcar meta');
    }
  };

  const dataAtual = new Date();

  return (
    <div>
      {metas.length > 0 ? (
        <div>
          {metas.map((meta) => (
            <div key={meta.id} className='flex items-center mb-2'>
              {meta.statusMeta === 'realizado' ? (
                <>
                  <input 
                    type="checkbox" 
                    name={meta.id} 
                    defaultChecked 
                    className='form-checkbox bg-red-500 h-5 w-5 rounded-full accent-verde opacity-30 checked:opacity-100' 
                    onChange={marcarMeta} 
                  />
                  <label htmlFor={meta.id} className='ml-2'>
                    <span className="text-md text-cinzaTexto line-through">{meta.meta}</span>
                    <span className="text-md text-verde ml-2">Meta cumprida</span>
                  </label>
                  <div className='ml-2'>
                    <Link to={`/metas/deletar/${meta.id}`}>
                      <button className='rounded-sm hover:dark:bg-white/20 hover:bg-black/20'>
                        <Lixeira stroke="#999999" />
                      </button>
                    </Link>
                  </div>
                </>
              ) : meta.statusMeta === 'não realizado' && dataAtual.getTime() > new Date(meta.data_expec).getTime() ? (
                <>
                  <label htmlFor={meta.id} className='ml-2'>
                    <span className="text-md text-red-500/80 line-through">{meta.meta}</span>
                    <span className="text-md text-red-500/80 ml-2">Expirado</span>
                  </label>
                  <div className='ml-2'>
                    <Link to={`/metas/deletar/${meta.id}`}>
                      <button className='rounded-sm hover:dark:bg-white/20 hover:bg-black/20'>
                        <Lixeira stroke="#999999" />
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <input 
                    type="checkbox" 
                    name={meta.id} 
                    className='form-checkbox bg-red-500 h-5 w-5 rounded-full accent-verde opacity-30 checked:opacity-100' 
                    onChange={marcarMeta} 
                  />
                  <label htmlFor={meta.id} className='ml-2'>
                    <span className="text-md text-cinzaTexto">{meta.meta}</span>
                    <span className="text-md text-verde ml-2">Até {formatarData(meta.data_expec)}</span>
                  </label>
                  <div className='ml-2'>
                    <Link to={`/metas/editar/${meta.id}`}>
                      <button className='rounded-sm hover:dark:bg-white/20 hover:bg-black/20'>
                        <Editar stroke="#999999" />
                      </button>
                    </Link>
                    <Link to={`/metas/deletar/${meta.id}`}>
                      <button className='rounded-sm ml-2 hover:dark:bg-white/20 hover:bg-black/20'>
                        <Lixeira stroke="#999999" />
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-xl font-bold text-cinzaTexto py-2'>Você ainda não possui metas</p>
        </div>
      )}
    </div>
  );
}

export default MostrarMetas;
