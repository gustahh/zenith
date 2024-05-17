import React from 'react'
import Relatorio from "../img/relatorio.png"

function IndexTela3() {
  return (
    <>
      <div className='w-full h-[90%] flex justify-end items-center'>
        <div className='w-full flex justify-start pt-8'>

          <div className='w-full flex items-center'>
            <div className='p-5'>
              <span className='pb-2 font-bold text-6xl text-justify'>Monitoramento de humor </span>
              <p className='text-xl'>Com o Zenith você pode registrar seus sentimentos diariamente de maneira simples e com a nossa tecnologia será analisada suas anotações e criado gráficos semanais e mensais que fornecerão insights valiosos sobre suas tendências emocionais. Os gráficos te ajudarão a identificar os humores tidos durante esse período, permitindo uma compreensão mais profunda de seu
bem-estar emocional</p>
            </div>

          </div>

          <div className='w-full pt-10 flex items-center'>
            <img className="w-30 h-30 pt-10" src={Relatorio} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}


export default IndexTela3