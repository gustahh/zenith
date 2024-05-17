import React from 'react'
import Relatorio from "../img/relatorio.png"

function IndexTela3() {
  return (
    <>
    <div className='w-full h-[90%] flex bg-[#F6F4EB] items-center '>
      <div className='w-full pt-10 flex justify-end items-center p-10'>
        <span className='float-left p-20 text-6xl font-bold'>Acompanhe seu humor de forma semanal e mensal</span>
        <img src={Relatorio} alt="" />
      </div>
    </div>
  </>
)
}


export default IndexTela3