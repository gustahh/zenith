import React from 'react'

function Button(props) {
  let css = '';
  return (
    <button type={props.type} className={`${props.width} ${props.height} ${props.float} ${props.cor}  text-white  rounded-md font-bold p-2.5`}>{ props.text }</button>
  )
}

export default Button