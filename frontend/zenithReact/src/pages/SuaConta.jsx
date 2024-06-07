import React from 'react'

function SuaConta() {
  return (
    <>
          <span className='text-xl font-bold text-cinzaTexto pb-3'>Sua conta</span>
             <ul>
          
                <li className='border-y-2 border-cinzaTexto/10 p-4'>
                    <span className='text-xl font-bold text-cinzaTexto pb-3'>Dados da conta</span>
                    <p>Veja suas informações como número de telefone, e email</p>
              </li>

           

           
                <li className='border-y-2 border-cinzaTexto/10 p-4'>
                    <span className='text-xl font-bold text-cinzaTexto pb-3'>Altere seu email e sua senha</span>
                    <p>Redefina sua senha a qualquer momento </p>
                </li>

             

                 
                  <li className='border-y-2 border-cinzaTexto/10 p-4'>
                        <span className='text-xl font-bold text-cinzaTexto pb-3'>Desative ou Exclua sua conta</span>
                        <p>Saiba como Desativar ou Excluir sua senha...</p>
                    </li>

                    
       </ul>

    </>

)
}

export default SuaConta