import Relatorio from "../../img/relatorio.png"

function IndexTela3() {
  return (
    <>
      <div className='w-full h-[90%] bg-[#F6F4EB] flex justify-end items-center'>
        <div className='w-full flex justify-start pt-8 pb-8'>

          <div className='w-full flex items-center'>
            <div className='p-5'>
              <span className='pb-2 font-bold text-6xl text-justify'>Monitoramento de humor </span>
              <div className='w-3/4'>
                <p className='text-xl'>Acompanhe seu humor com os relatórios. Eles são gerados de 
                maneira semanal e mensal e exibem informações valiosas sobre como você anda se 
                sentindo.</p>
              </div>

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