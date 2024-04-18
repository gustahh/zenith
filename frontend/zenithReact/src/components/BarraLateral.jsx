import React from 'react'
import { Link } from 'react-router-dom'
import HouseVerde from "../icons/HouseVerde"
import BookVerde from '../icons/BookVerde'
import FaceSmileVerde from  '../icons/FaceSmileVerde'
import FaceSmileCinza from  '../icons/FaceSmileCinza'
import BookCinza from '../icons/BookCinza'
import HouseCinza from "../icons/HouseCinza"
import TargetVerde from '../icons/TargetVerde'
import TargetCinza from '../icons/TargetCinza'




function BarraLateral() {
  return (
    <div className='w-1/4 h-screen bg-ice dark:bg-cinza shadow-lg float-left'>
        <ul>
            <Link to="/Home" >
              <li>
                <HouseVerde/>Página Inicial
                </li>
              </Link>
            <Link to="/anotacoes" >
              <li>
                <BookCinza/>Notas
                </li>
              </Link>
            <Link to="/relatorio" >
              <li>
                <FaceSmileCinza/>Relatório
                </li>
              </Link>
            <Link to="/metas" >
              <li>
                <TargetCinza/>Metas
                </li>
              </Link>
        </ul>
    </div>
  )
}

export default BarraLateral