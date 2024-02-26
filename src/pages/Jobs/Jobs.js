import React from "react";
import JobCard from "./RightJobCard";
import "./styles/Jobs.css"
import JobCard2 from "./PopularJobCard";


const Jobs = () => {
  const numberOfJobs = 6; // Set the number of times you want to run the loop

  return (
    <>
      <div className="role-text-container">
        <div style={{display:'flex',textAlign:'center',alignItems:'center'}}>
        <h2 className='job-title-left' style={{fontSize:"2rem"}}>Find a job that aligns with your </h2><h1 className="job-title-right"> Strengths and Interests.</h1>
        </div>
        <br></br>
        <p>
        Discover employment opportunities that<span className="course-highlight-description"> resonate with your strengths and passions,</span> forging a career path that blends <span className="course-highlight-description">personal fulfillment with 
        professional success</span>
        </p>
        <br></br>
        <br></br>
      </div>
      <div className="jobs-container">
        {[...Array(numberOfJobs)].map((_, index) => (
          <JobCard key={index} />
        ))}
      </div>
      <div className="role-text-container">
      <div style={{display:'flex',textAlign:'center',alignItems:'center'}}>
        <h2 className='job-title-left' style={{fontSize:"1.7rem"}}>Explore </h2><h1 className="job-title-right" style={{fontSize:"1.7rem"}}> in-demand careers</h1><h2 className='job-title-left' style={{fontSize:"1.7rem"}}>and discover popular job opportunities in your field.</h2>
        </div>
        <br></br>
        <p>
        Explore <span className="course-highlight-description">popular job opportunities </span>in line with current market trends, ensuring a<span className="course-highlight-description"> promising professional path.</span></p>
        <br></br>
        <br></br>
      </div>
      <div className="pscroll-container">
      <div className="pjobs-container">
        {[...Array(numberOfJobs)].map((_, index) => (
          <JobCard2 key={index} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Jobs;
