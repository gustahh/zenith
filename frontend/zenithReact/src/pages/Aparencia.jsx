import React from 'react'
import TrocaTema from '../components/TrocaTema'


function Tema() {
  return (
    <>
      <div className='flex items-stretch'>
        <span className='flex w-full text-xl font-bold text-cinzaTexto p-0 m-0 pb-3'>
          Tema
          </span>
        <TrocaTema />
      </div>
      <div>
        <p className='pb-3 w-full text-xs leading-3 text-cinzaTexto'>Personalize a aparência do Zenith no seu dispositivo.</p>
      </div>


    </>
  )
}

export default Tema