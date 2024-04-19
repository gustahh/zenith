import React from 'react'
import { Link } from 'react-router-dom'
import HouseVerde from "../icons/HouseVerde"
import BookVerde from '../icons/BookVerde'
import FaceSmileVerde from  '../icons/FaceSmileVerde'
import TargetVerde from '../icons/TargetVerde'
import BookCinza from '../icons/BookCinza'
import HouseCinza from '../icons/HouseCinza'
import FaceSmileCinza from  '../icons/FaceSmileCinza'
import TargetCinza from '../icons/TargetCinza'

function BarraLateral() {
  return (
    <div className='w-1/4 h-screen bg-ice dark:bg-cinza shadow-lg float-left'>
        <ul className='pt-10 pl-4'>
            <Link to="/home">
              <li className='w-44 h-8 flex items-center p-4 rounded-md hover:bg-chumbo'>
                <HouseVerde/>
                <span className='text-verde float-left font-bold pl-2'>Página Inicial</span>
              </li>
            </Link>
            <br/> 
            <Link to="/anotacoes" >
              <li className='w-44 h-8 flex items-center p-4 rounded-md hover:bg-chumbo'>
                <BookCinza/>
                <span className='text-cinzaTexto float-left font-bold pl-2'>Notas</span>
              </li>
            </Link>
            <br/>
            <Link to="/relatorio" >
              <li className='w-44 h-8 flex items-center p-4 rounded-md hover:bg-chumbo'>
                <FaceSmileCinza/>
                <span className='text-cinzaTexto float-left font-bold pl-2'>Relatório</span>
              </li>
            </Link>
            <br/>
            <Link to="/metas" >
              <li className='w-44 h-8 flex items-center p-4 rounded-md hover:bg-chumbo'>
                <TargetCinza/>
                <span className='text-cinzaTexto float-left inline-block align-middle font-bold pl-2'>Metas</span>
              </li>
            </Link>
        </ul>
    </div>
  )
}

export default BarraLateral