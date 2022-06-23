import React from 'react'
import Button from '../../Button/Button'
import './CourseCard.css'

const CourseCard = ({title,desc,duration,date,authors}) => {
  return (
    <article className='course'>
    <div className="course-left">
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
    <div className="course-right">
        <table>
            <tr>
                <th>
                Authors:
                </th>
                <td>
                {authors}
                </td>
            </tr>
            <tr>
                <th>
                Duration:
                </th>
                <td>
                {duration}
                </td>
            </tr>
            <tr>
                <th>
                Created:
                </th>
                <td>
                {date}
                </td>
            </tr>
        </table>
        <Button/>
    </div>
    </article>
  )
}

export default CourseCard