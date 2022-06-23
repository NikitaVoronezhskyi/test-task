import React from 'react'
import './Input.css'

const Input = (labelText,placeholderText ,onChange) => {
  return (
    <label htmlFor="">
      <input className='input' type="text" placeholder={placeholderText} />
    </label>
  )
}

export default Input