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

        const dataFormatada = res.data.results.map(item => {
          // Converter para objeto Date
          const dataObjeto = new Date(item.data_expec);

          const dia = dataObjeto.getDate();
          let mes = dataObjeto.getMonth() + 1; // Mês começa do zero
          const ano = dataObjeto.getFullYear();
          const hora = dataObjeto.getHours();
          const minutos = dataObjeto.getMinutes();

          // Adicionar zero ao mês e minutos, se necessário
          mes = mes < 10 ? '0' + mes : mes;
          const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;

          return `${dia}/${mes}/${ano} às ${hora}:${minutosFormatados}`;
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
                      <div>
                        <input type="checkbox" name={meta.id} />
                        <label htmlFor={meta.id}>
                          <span className="text-md ml-2 text-cinzaTexto">{meta.meta}</span>
                          <span className="text-md ml-2 text-verde">Expira em: {data}</span>
                        </label>
                      </div>
                    ) : (
                      <div>
                        <input type="checkbox" name={meta.id} checked />
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