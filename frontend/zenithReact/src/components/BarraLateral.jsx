import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import HouseVerde from "../icons/HouseVerde"
import BookVerde from '../icons/BookVerde'
import FaceSmileVerde from '../icons/FaceSmileVerde'
import TargetVerde from '../icons/TargetVerde'
import BookCinza from '../icons/BookCinza'
import HouseCinza from '../icons/HouseCinza'
import FaceSmileCinza from '../icons/FaceSmileCinza'
import TargetCinza from '../icons/TargetCinza'
import Li from './Li'
import Configuracoes from '../icons/Configuracoes';
import Logout from '../icons/Logout';

function BarraLateral() {
  const location = useLocation();
  const [nome, setNome] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:3000/perfil')
          .then((res) => {
              setNome(res.data.results[0].nome);
          });
  }, []);
  return (
    <div className='w-1/4 h-screen bg-ice dark:bg-cinza shadow-lg float-left flex flex-col'>
      <div className='flex-1'>
        <ul className='pt-10 pl-4'>
          <Link to="/home">
            <Li nome="Pagina Inicial" cor={location.pathname === "/home" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/home" ? <HouseVerde /> : <HouseCinza />} />
          </Link>
          <br />
          <Link to="/anotacoes" >
            <Li nome="Anotações" cor={location.pathname === "/anotacoes" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/anotacoes" ? <BookVerde /> : <BookCinza />} />
          </Link>
          <br />
          <Link to="/relatorio" >
            <Li nome="Relatório" cor={location.pathname === "/relatorio" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/relatorio" ? <FaceSmileVerde /> : <FaceSmileCinza />} />
          </Link>
          <br />
          <Link to="/metas" >
            <Li nome="Metas" cor={location.pathname === "/metas" ? "verde" : "cinzaTexto"}
              children={location.pathname === "/metas" ? <TargetVerde /> : <TargetCinza />} />
          </Link>
        </ul>
      </div>

      <div className='w-full h-16 p-3 flex items-center justify-center 
          font-bold container mx-auto'>
        <div className='w-full h-full flex items-center justify-stretch'>
          <div>
            <div className='w-12 h-12 bg-black rounded-full float-left'></div>
          </div>

          <div>
            <span className='text-xl font-bold text-cinzaTexto pl-3 float-left'>
              {nome}
            </span>
          </div>

          <button className='ml-20 float-right'>
            <Configuracoes className="" />
          </button>

          <button className='ml-3 float-right'>
            <Logout className="" />
          </button>
        </div>



      </div>
    </div>
  )
}

export default BarraLateral