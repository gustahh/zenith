import React from 'react'
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../img/zenith-logo.png"

function Header() {
  return (
    <header className='w-full h-auto flex bg-[#F6F4EB] fixed'>
      <div className='w-full h-full p-2 pt-3 flex items-center justify-between'>
      <div className='w-16 h-16 ml-3'><img src={Logo} alt="" /></div>
        <h1 className='text-verde text-4xl font-bold ml-3'>Zenith</h1>

        <div className={`flex items-center ml-auto`}>
        <Link to="/login">
          <Button className='w-auto h-auto p-2 bg-transparent rounded-md mr-2 text-verde 
      font-bold text-sm' text='Entrar' />
        </Link> 
      <Link to="/registrar">
          <Button className='w-auto h-auto p-2 bg-verde rounded-md mr-2 text-white 
      font-bold text-sm' text='Comece a usar gratuitamente' />
      </Link> 
        </div>
      </div>


    </header>
  )
}

export default Header