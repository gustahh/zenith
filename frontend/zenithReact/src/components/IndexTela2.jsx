import React from 'react'
import Tela1 from "../img/tela-1.png"

function IndexTela2() {
  return (
    <>
      <div className='w-full h-[90%] flex justify-end items-center pl-5 pb-5'>
        <div className='w-full flex justify-start pt-8 pr-10'>

          <div className='w-full flex items-center'>
            <div className='w-full pt-10 flex items-center'>
              <img className="w-30 h-30 pt-10" src={Tela1} alt="" />
            </div>
            <div className='p-5'>
              <span className='pb-2 font-bold text-6xl text-justify'>Registre seus momentos</span>
              <div className='w-4/4'>
                <p className='text-xl'>Crie quantas anotações quiser diariamente. Registre seus 
                sentimentos.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexTela2