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
            <div className='p-5'>
              <span className='pb-2 font-bold text-6xl text-justify'>Estipule suas metas </span>
              <p className='text-xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default IndexTela4