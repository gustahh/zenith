import React from 'react'

function Input(props) {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder}
    className='w-full h-8 bg-preto rounded-md mb-3 placeholder:text-cinzaTexto text-cinzaTexto pl-2 focus:border-verde' onChange={props.handle}/>
  )
}

export default Input