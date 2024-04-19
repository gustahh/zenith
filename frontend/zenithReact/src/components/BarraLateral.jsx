import React from 'react'
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

function BarraLateral() {
  const location = useLocation();
  return (
    <div className='w-1/4 h-screen bg-ice dark:bg-cinza shadow-lg float-left'>
      <ul className='pt-10 pl-4'>
        <Link to="/home">
          <Li nome="Pagina Inicial" cor={location.pathname === "/home" ? "verde" : "cinzaTexto"} 
          children={location.pathname === "/home" ? <HouseVerde /> : <HouseCinza />}/>
        </Link>
        <br />
        <Link to="/anotacoes" >
          <Li nome="Anotações" cor={location.pathname === "/anotacoes" ? "verde" : "cinzaTexto"}
          children={location.pathname === "/anotacoes" ? <BookVerde /> : <BookCinza />}/>
        </Link>
        <br />
        <Link to="/relatorio" >
          <Li nome="Relatório" cor={location.pathname === "/relatorio" ? "verde" : "cinzaTexto"}
          children={location.pathname === "/relatorio" ? <FaceSmileVerde /> : <FaceSmileCinza />}/>    
        </Link>
        <br />
        <Link to="/metas" >
          <Li nome="Metas" cor={location.pathname === "/metas" ? "verde" : "cinzaTexto"}
          children={location.pathname === "/metas" ? <TargetVerde /> : <TargetCinza />}/>
        </Link>
      </ul>
    </div>
  )
}

export default BarraLateral