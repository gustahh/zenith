import React from 'react'

function Input(props) {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder}
    className='w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto'/>
  )
}

export default Input