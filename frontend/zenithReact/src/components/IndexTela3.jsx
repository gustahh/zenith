import React from 'react'
import Relatorio from "../img/relatorio.png"

function IndexTela3() {
  return (
    <>
    <div className='w-full h-[90%] flex bg-[#F6F4EB] items-center '>
      <div className='w-full pt-10 flex justify-between items-center  p-10'>
        <span className='font-bold p-10 text-4xl self-start'>Monitoramento de Humor</span>
        <span className='font-bold p-10 text-1xl self-start'>Com o Zenith você pode registrar seus sentimentos diariamente de maneira simples e com a nossa tecnologia será analisada suas anotações e criado gráficos semanais e mensais que fornecerão insights valiosos sobre suas tendências emocionais. Os gráficos te ajudarão a identificar os humores tidos durante esse período, permitindo uma compreensão mais profunda de seu bem-estar emocional.</span>
        <img src={Relatorio} alt="" />
      </div>
    </div>
  </>
)
}
    

export default IndexTela3