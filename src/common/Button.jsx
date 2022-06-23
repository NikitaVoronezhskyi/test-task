import React from 'react'
import './Button.css'


const Button = ({size,text}) => {
  return (
    <button className='btn'>
    {text}
    </button>
  )
}

export default Button