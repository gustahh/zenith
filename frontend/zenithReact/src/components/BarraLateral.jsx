import React from 'react'
import { Link } from 'react-router-dom'

function BarraLateral() {
  return (
    <div className='w-96 h-screen bg-ice dark:bg-cinza shadow-lg'>
        <ul>
            
            <li>Notas</li> 
            <Link to="/relatorio" ><li>Relatório</li></Link>
            <li>Metas</li>
        </ul>
    </div>
  )
}

export default BarraLateral