import React from 'react'
import Button from '../../common/Button'
import SearchBar from './SearchBar/SearchBar'
import './Courses.css'



const Courses = () => {
  return (
    <main>
    <div className="container main">
    <div className="main-top">
      <SearchBar/>
      <Button text="Add New Course"/>
    </div>
    </div>
    </main>
  )
}   

export default Courses