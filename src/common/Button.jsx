import React from 'react'
import './Button.css'


const Button = ({text,onClick,type}) => {
  return (
    <button type={type || "button" } onClick={onClick} className='btn'>
    {text}
    </button>
  )
}

export default Button