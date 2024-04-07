import React from 'react'
import FormLogin from './FormLogin'

function FormContainer(props) {
  return (
    <div className='w-auto flex justify-center bg-preto'>
        <span className=''>{props.name}</span>
        <FormLogin />
    </div>
    
  )
}

export default FormContainer