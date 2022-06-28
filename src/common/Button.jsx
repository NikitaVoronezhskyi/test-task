import React from 'react'
import './Button.css'


const Button = ({text,onClick,type,onSubmit}) => {
  return (
    <button onSubmit={onSubmit} type={type || "button" } onClick={onClick} className='btn'>
    {text}
    </button>
  )
}

export default Button