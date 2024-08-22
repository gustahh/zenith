import React from 'react'
import FormLogin from './Login/FormLogin'
import FormRegistro from './Registro/FormRegistro'

function FormContainer(props) {
  return (
    <div className='w-86 h-auto bg-transparent sm:bg-cinzaEscuro rounded-lg text-center p-3'>
        <span className='text-white justify-center font-bold'>{props.name}</span>
        <br/><br/>
        {props.children}
    </div>
    
  )
}

export default FormContainer