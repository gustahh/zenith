import React from 'react'

function Label(props) {
  return (
    <label className='float-left text-cinzaTexto font-bold' id={props.id}> 
    {props.nome}
    </label>
  )
}

export default Label