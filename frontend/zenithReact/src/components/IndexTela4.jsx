import React from 'react'
import metas from "../img/metas.png"
import img2 from "../img/img2.png"


function IndexTela4() {
  return (
    <>
      <div className='w-full h-[90%] flex justify-end items-center'>
        <div className='w-full flex justify-start pt-8'>
          <div className='w-full pt-10 flex items-center'>
            <img className="w-30 h-30 pt-10" src={metas} alt="" />
          </div>
          <div className='w-full flex items-center'>
            <span className='font-bold text-6xl ml-5'>Estipule suas <br /> metas </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexTela4