import React from 'react'
import Button from '../../../common/Button'
import './CourseCard.css'

const CourseCard = ({title,desc,duration,date,authors}) => {
  return (
    <article className='course'>
    <div className="course-left">
        <h3 className='course-left-title'>{title}</h3>
        <p className='course-left-text'>{desc}</p>
    </div>
    <div className="course-right">
        <div className="course-right-block">
        <p className='course-right-block-authors'>Authors:{authors}</p>
        <p>Duration:{duration}</p>
        <p>Created:{date}</p>
        </div>
        <Button text="Show Course"/>
    </div>
    </article>
  )
}

export default CourseCard