import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HouseVerde from "../icons/HouseVerde";
import BookVerde from '../icons/BookVerde';
import FaceSmileVerde from '../icons/FaceSmileVerde';
import TargetVerde from '../icons/TargetVerde';
import BookCinza from '../icons/BookCinza';
import HouseCinza from '../icons/HouseCinza';
import FaceSmileCinza from '../icons/FaceSmileCinza';
import TargetCinza from '../icons/TargetCinza';
import Li from './Li';
import axios from 'axios';
import UsuarioLogado from './UsuarioLogado'

function BarraMobile() {
  const location = useLocation();

  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:3000/perfil')
      .then((res) => {
        setNome(res.data.results[0].nome);
        setFoto(res.data.results[0].foto_perfil);
      });
  }, []);

  const Imagem = ({ foto }) => {
    const caminho = `/src/img/${foto}`;

    return (
      <div className='w-6 h-6 rounded-full float-left overflow-hidden'>
        <img src={caminho} alt={foto} />
      </div>
    );
  };

  return (
    <div className='z-20 fixed bottom-0 sm:hidden w-screen h-[10%] bg-ice dark:bg-cinza shadow-lg float-left flex items-center justify-center'>
      <div className='flex-1'>
        <ul className='w-full h-full p-2 flex items-center justify-between'>
          <Link to="/home">
            <Li cor={location.pathname === "/home" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/home" ? <HouseVerde /> : <HouseCinza />} />
          </Link>
          <br />
          <Link to="/anotacoes" >
            <Li cor={location.pathname === "/anotacoes" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/anotacoes" ? <BookVerde /> : <BookCinza />} />
          </Link>
          <br />
          <Link to="/relatorio" >
            <Li cor={location.pathname === "/relatorio" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/relatorio" ? <FaceSmileVerde /> : <FaceSmileCinza />} />
          </Link>
          <br />
          <Link to="/metas" >
            <Li cor={location.pathname === "/metas" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/metas" ? <TargetVerde /> : <TargetCinza />} />
          </Link>

          <Link to="/config" >
            <Li children={<Imagem foto={foto} />} />
          </Link>
        </ul>
      </div>

    </div>
  )
}

export default BarraMobile