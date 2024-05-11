import React from 'react'

function Button(props) {
  let css = '';
  return (
    <button type={props.type} className={`${props.width} ${props.height} text-white bg-verde rounded font-bold p-2.5 px-40`}>{ props.text }</button>
  )
}

export default Button