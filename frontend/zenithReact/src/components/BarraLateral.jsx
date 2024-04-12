import React from 'react'
import { Link } from 'react-router-dom'

function BarraLateral() {
  return (
    <div className='w-1/4 h-screen bg-ice dark:bg-cinza shadow-lg float-left'>
        <ul>
            <Link to="/Home" ><li>Página Inicial</li></Link>
            <Link to="/anotacoes" ><li>Notas</li></Link>
            <Link to="/relatorio" ><li>Relatório</li></Link>
            <Link to="/metas" ><li>Metas</li></Link>
        </ul>
    </div>
  )
}

export default BarraLateral