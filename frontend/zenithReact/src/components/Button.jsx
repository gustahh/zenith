import React from 'react'

function Button(props) {
  let css = '';
  return (
    <button type={props.type} className={`${props.className}`}>{ props.text }</button>
  )
}

export default Button