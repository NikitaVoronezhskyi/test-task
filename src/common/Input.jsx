import React from 'react'
import './Input.css'

const Input = ({labelText,placeholderText,name ,onChange,required,type,value,max,min}) => {
  return (
    <label className="input-wrapper" htmlFor="">
    {labelText}
      {!required && <input value={value} max={max} min={min} onChange={onChange} name={name} className='input' type="text" placeholder={placeholderText} />}
      {required && <input value={value} max={max} min={min} type={type} onChange={onChange} name={name} className='input' placeholder={placeholderText} required /> }
    </label>
  )
}

export default Input