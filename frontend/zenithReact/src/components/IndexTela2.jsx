import React from 'react'
import Tela1 from "../img/tela-1.png"

function IndexTela2() {
  return (
    <>
      <div className='w-full h-[90%] flex pb-10'>
        <div className='w-full flex flex-col justify-center items-stretch p-10'>
          <span className='font-bold p-10 text-3xl self-start'>Registre seus momentos... </span>
          <img className="w-5/12 h-5/12 pt-3 self-start" src={Tela1} alt="" />
          <span className='float-left p-20 text-3xl font-bold self-end'> Anotações ajudam a organizar pensamentos e sentimentos, promovendo autoconsciência e reflexão. Ao registrar emoções e padrões de pensamento, as pessoas ganham clareza sobre seus desafios mentais.</span>
        </div>
      </div>
    </>
  )
}

export default IndexTela2