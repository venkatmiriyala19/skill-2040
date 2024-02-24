import React from 'react'
import '../Courses/styles/Courses.css'
import CourseCard from '../Courses/CourseCard';
export default function Courses() {
  return (
    <>
      <div className='coding-container'>
        <div className='dsasheet'>
          <div className='container'>

            <h1>DSA sheet</h1>
            <div className='status'>

            </div>
            <div className='numberEnrolled'>

            </div>
          </div>
        </div>

        <div className='sqlsheet'>
          <h1>SQL sheet</h1></div>
      </div>
    </>
  )
}
