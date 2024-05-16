import React from 'react'
import Tela1 from "../img/tela-1.png"

function IndexTela2() {
  return (
    <>
      <div className='w-full h-[90%] flex pb-10'>
        <div className='w-full flex flex-col justify-center items-stretch p-10'>
          <span className='font-bold p-10 text-3xl self-start'>Registre seus momentos... </span>
          <img className="w-5/12 h-5/12 pt-3 self-start" src={Tela1} alt="" />
          <span className='float-left p-20 text-3xl font-bold self-end'>Acompanhe seu humor de forma semanal e mensal</span>
        </div>
      </div>
    </>
  )
}

export default IndexTela2