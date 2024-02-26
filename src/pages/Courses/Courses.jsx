import React from "react";
import "./styles/Courses.css";
import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <>
            
            <div className="role-text-container">
        <div style={{display:'flex',textAlign:'center',alignItems:'center'}}>
        <h1 className='job-title-left' style={{fontSize:"1.7rem"}}>Elevate your</h1><h1 className="job-title-right" style={{fontSize:"1.7rem"}}> Skills and Knowledge.</h1>
        </div>
        <br></br>
        <p>
        Unlock your potential with our <span className="course-highlight-description">diverse range of online courses</span> designed to empower and <span className="course-highlight-description">enrich your learning journey.</span>
        </p>
        <br></br>
        <br></br>
      </div>
      <div
                className="course-card-container"
            >
                {Array.from({ length: 10 }, (_, index) => (
                    <CourseCard key={index} />
                ))}
            </div>
        </>
    );
}