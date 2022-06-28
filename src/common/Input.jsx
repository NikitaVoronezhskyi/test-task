import React from 'react'
import './Input.css'

const Input = ({labelText,placeholderText,name ,onChange,required,type}) => {
  return (
    <label className="input-wrapper" htmlFor="">
    {labelText}
      {!required && <input onChange={onChange} name={name} className='input' type="text" placeholder={placeholderText} />}
      {required && <input type={type} onChange={onChange} name={name} className='input' placeholder={placeholderText} required /> }
    </label>
  )
}

export default Input