import React from 'react'
import Button from '../components/Button';

function Header() {
  return (
    <header className='w-full h-16 bg-red-500 p-5 flex items-center justify-stretch'>
      <h1 className='text-verde text-4xl font-bold'>Zenith</h1>
      <Button float='float-right' width='auto' height='auto' text='Comece a usar gratuitamente' cor='bg-verde'/>
    </header>
  )
}

export default Header