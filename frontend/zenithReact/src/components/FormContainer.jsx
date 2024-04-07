import React from 'react'
import FormLogin from './FormLogin'

function FormContainer(props) {
  return (
    <div className='w-96 h-auto bg-cinzaEscuro rounded text-center p-3'>
        <span className='text-white justify-center font-bold'>{props.name}</span>
        <br/><br/>
        <FormLogin />
    </div>
    
  )
}

export default FormContainer