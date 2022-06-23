import React from 'react'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <Input/>
      <Button text="Search" size="medium"/>
    </div>
  )
}

export default SearchBar