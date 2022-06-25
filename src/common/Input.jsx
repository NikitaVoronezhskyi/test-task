import React from 'react'
import './Input.css'

const Input = ({labelText,placeholderText ,onChange}) => {
  return (
    <label className="input-wrapper" htmlFor="">
    {labelText}
      <input onChange={onChange} className='input' type="text" placeholder={placeholderText} />
    </label>
  )
}

export default Input