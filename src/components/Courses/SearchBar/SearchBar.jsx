import React from 'react'
import { useState } from 'react'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <Input name="search" placeholderText="Enter course name..."/>
      <Button text="Search" size="medium"/>
    </div>
  )
}

export default SearchBar