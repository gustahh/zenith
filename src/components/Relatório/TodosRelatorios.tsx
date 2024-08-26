import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FaceGrande from '../../icons/FaceGrande';

// Define a interface para os dados do relatório
interface Relatorio {
  id: string;
  semanaMes: number;
  mes: number;
}

// Define a interface para os dados das cores
interface Cor {
  nome: string;
}

function SeusRelatorios() {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [cores, setCores] = useState<Cor[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/relatorios/relatorioSemanal/ver/todos')
      .then((res) => {
        setRelatorios(res.data.results);
      });
    axios.get('http://localhost:3000/cores/cor/aleatorio')
      .then((res) => {
        setCores(res.data.results);
      });
  }, []);

  // Meses e semanas
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

  return (
    <>
      <div className='text-xl font-bold text-cinzaTexto pb-3'>Todos os seus relatórios semanais</div>
      <div>
        {relatorios.length > 0 ? (
          relatorios.map((relatorio, index) => (
            <Link to={`/relatorio/${relatorio.id}`} key={relatorio.id}>
              <div className={`w-full h-auto bg-${cores[index]?.nome || 'defaultColor'} flex justify-between rounded-md p-5 mb-5`}>
                <div className='w-40'>
                  <span className='font-bold text-3xl opacity-70'>{semanas[relatorio.semanaMes]}</span>
                  <span className='font-bold text-3xl opacity-70'>{meses[relatorio.mes]}</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <FaceGrande className="opacity-70" />
                  <span className='font-bold text-xl opacity-70'>Clique aqui para ver</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className='flex items-center justify-center'>
            <p className='text-xl font-bold text-cinzaTexto py-2 justify-self-start'>Você ainda não possui relatórios, um relatório fresquinho sairá do forno logo logo!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SeusRelatorios;
