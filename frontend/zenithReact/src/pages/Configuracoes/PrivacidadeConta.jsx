import React from 'react'
import Habilitar2FA from '../../components/Habilitar2FA'

function PrivacidadeConta() {
  return (
    <>
      <>
        <div>
          <div className='flex'>
            <span className='flex w-full h-text-xl font-bold text-cinzaTexto p-0 m-0 pb-3'>
              Privacidade e Segurança
            </span>
          </div>

          <div className='border-y-2 border-cinzaTexto/10 p-4'>
            <div className='flex items-center justify-between'>
              <div className='w-full flex items-center justify-between'>
                <span className='text-md font-bold text-cinzaTexto p-0 m-0 pb-3'>Autentificação de dois fatores</span>
                <Habilitar2FA />
              </div>
            </div>

            <div>
              <p className='pb-3 w-full text-xs leading-3 text-cinzaTexto'>Proteja a sua conta com mais
                uma barreira de Segurança.</p>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default PrivacidadeConta