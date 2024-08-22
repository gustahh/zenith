import React from 'react'

function Button(props) {
  return (
    <>
      <button type={props.type} className={`${props.className}`} onClick={props.click}>
        {props.child} 
        <span className='pl-1'>{props.text}</span>
      </button>
    </>
  )
}

export default Button