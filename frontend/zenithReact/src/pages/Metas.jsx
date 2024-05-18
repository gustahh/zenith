import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Metas() {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const [metas, setMetas] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/metas')
      .then((res) => {
        setMetas(res.data.results);

        let diaDataAtual = new Date().getDate();
        let mesDataAtual = new Date().getMonth() + 1;

        const dataFormatada = res.data.results.map(item => {

          // Converter para objeto Date
          const dataObjeto = new Date(item.data_expec);

          let dia = dataObjeto.getDate();
          let mes = dataObjeto.getMonth() + 1; // Mês começa do zero
          let ano = dataObjeto.getFullYear();
          // Adicionar zero ao mês e minutos, se necessário
          mes = mes < 10 ? '0' + mes : mes;

          // Calcular a diferença entre meses
          const diferenca = mes - mesDataAtual;
          const diferencaDias = dia - diaDataAtual;

          //diferenca maior que 6 meses
          if (diferenca >= 6) {
            return `- ${dia}/${mes}/${ano}`;
          } if (diferenca >= 2 || diferenca  < 6) { //diferenca maior que 6 meses
            return `- Até ${mes}`;
          } else if (diferenca === 1) {
            return `- Neste mês`;
          } else if (diferenca < 1) {
            if (diferencaDias <= 7) {
              return `- Nesta semana`;
            } else if (diferencaDias === 1) {
              return `- Amanhã`;
            }
          }

        });

        setData(dataFormatada);
      });
  }, []);
  return (
    <>
      <div>
        <div className='text-xl font-bold text-cinzaTexto'>Metas</div>
        <div>
          {metas.length > 0 ? (
            metas.map((meta) => (
              <div>
                {metas.map((meta) => (
                  <div key={meta.id}>
                    {meta.statusMeta === 'não realizado' ? (
                      <div className='flex items-center'>
                        <input type="checkbox" name={meta.id} className='form-checkbox bg-red-500 h-5 w-5 rounded-full accent-verde opacity-30 checked:opacity-100' />
                        <label htmlFor={meta.id}>
                          <span className="text-md ml-2 text-cinzaTexto">{meta.meta}</span>
                          <span className="text-md ml-2 text-verde">{data}</span>
                        </label>
                      </div>
                    ) : (
                      <div className='flex items-center'>
                        <input type="checkbox" name={meta.id} checked className='checked:form-checkbox checked:h-5 checked:w-5 checked:rounded-full checked:accent-verde checked:opacity-100' />
                        <label htmlFor={meta.id} className="text-md ml-2 text-cinzaTexto line-through">{meta.meta}</label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Você ainda não possui relatórios, um relatório fresquinho sairá do forno logo logo!</p>
          )}
        </div>
      </div >

    </>
  )
}

export default Metas