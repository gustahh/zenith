import React from 'react'
import metas from "../../img/metas.png"
import img2 from "../../img/img2.png"


function IndexTela4() {
  return (
    <>
      <div className='w-full h-[90%] flex justify-end items-center'>
        <div className='w-full flex justify-start pt-8'>
          <div className='w-full pt-10 flex items-center'>
            <img className="w-30 h-30 pt-10" src={metas} alt="" />
          </div>
          <div className='w-full flex items-center'>
            <div className='p-5'>
              <span className='pb-2 font-bold text-6xl text-justify'>Estipule suas metas</span>
              <div className='w-3/4 pt-2'>
                <p className='text-xl'>Crie metas distintas para área da vida de sua escolha. Foque no 
                que realmente importa e trabalhe no seu objetivo!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default IndexTela4