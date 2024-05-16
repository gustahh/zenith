import React from 'react'
import metas from "../img/metas.png"
import img2 from "../img/img2.png"


function IndexTela4() {
  return (
    <>
    <div className='w-full h-[90%] flex pb-10'>
      <div className='w-full flex flex-col justify-center items-stretch p-10'>
        <span className='font-bold p-10 text-3xl self-start'>Estipule suas metas </span>
        <img className="w-5/12 h-5/12 pt-3 self-start" src={metas} alt="" />
        <span className='float-left p-20 text-3xl font-bold self-end'>Acompanhe seu humor de forma semanal e mensal</span>
      </div>
    </div>
  </>
  )
}

export default IndexTela4