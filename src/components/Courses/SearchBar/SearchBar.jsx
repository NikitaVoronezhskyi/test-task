import React, { useState } from 'react'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import './SearchBar.css'

const SearchBar = () => {
  const [input,setInput] = useState('')
  return (
    <div className='searchbar'>
      <Input placeholderText="Enter course name..."/>
      <Button text="Search" size="medium"/>
    </div>
  )
}

export default SearchBar