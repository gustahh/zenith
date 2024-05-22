import React, { useState, useEffect } from 'react'
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
import UsuarioLogado from './UsuarioLogado'

function BarraLateral() {
  const location = useLocation();
  
  return (
    <div className='block sm:hidden w-1/6 h-screen bg-ice dark:bg-cinza shadow-lg float-left flex flex-col justify-center'>
      <div className='flex-1'>
        <ul className='pt-10'>
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
        </ul>
      </div>

      <UsuarioLogado/>

      
    </div>
  )
}

export default BarraLateral