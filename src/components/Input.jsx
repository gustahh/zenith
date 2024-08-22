import React from 'react'

function Input(props) {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder}
    className={`w-full h-8 bg-preto/20 rounded-md mb-3 placeholder:text-cinzaTexto text-cinzaTexto pl-2 outline-none focus:border-2 border-verde`}
    onChange={props.handle}/>
  )
}

export default Input