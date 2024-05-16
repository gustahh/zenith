import React from 'react'

function Button(props) {
  let css = '';
  return (
    <button type={props.type} className={`${props.className}`} onClick={props.click}>{ props.text }</button>
  )
}

export default Button