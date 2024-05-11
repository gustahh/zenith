import React from 'react'
import Button from '../components/Button';

function Header() {
  return (
    <header className='w-full h-auto flex'>
      <div className='w-full h-full p-2 pt-3 flex items-center justify-between'>
        <h1 className='text-verde text-4xl font-bold ml-3'>Zenith</h1>

        <div className={`flex items-center ml-auto`}>
          <Button className='w-auto h-auto p-2 bg-transparent rounded-md mr-2 text-verde 
      font-bold text-sm' text='Entrar' />
          <Button className='w-auto h-auto p-2 bg-verde rounded-md mr-2 text-white 
      font-bold text-sm' text='Comece a usar gratuitamente' />
        </div>
      </div>


    </header>
  )
}

export default Header