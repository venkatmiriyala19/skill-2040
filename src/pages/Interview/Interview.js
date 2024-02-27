import React from 'react';
import MentorCard from './MentorCard'; 
import "./styles/Interview.css";

const Interview = () => {
  const numberOfMentors = 6;
  const mentorCards = Array.from({ length: numberOfMentors }, (_, index) => (
    <MentorCard key={index} />
  ));

  return (
    <>
    <div className="top-mentors-container">
        <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
        <h2 className="mentor-title-left" style={{ fontSize: "2rem" }}>Top </h2>
          <h1 className="mentor-title-right" style={{ fontSize: "2rem" }}>Mentors</h1>
        </div>
        <br />
        <p className="mentor-title-description" style={{ fontSize: "1.2rem" }}>
          Discover mentors who excel in their fields and have a <span style={{color:"rgb(106, 99, 244)",fontWeight:"700"}}>proven track record of guiding learners</span> to success. Whether you're diving into <span style={{color:"rgb(106, 99, 244)",fontWeight:"700"}}>programming or mastering a new technology</span>, our top mentors are here to support your journey.
        </p>
        <br />
        <br />
      </div>
    <div className="interview-container">
      {/* Scrolling content with MentorCard components */}
      <div className="mentor-cards-wrapper">{mentorCards}</div>
    </div>

    <div className="top-mentors-container" style={{marginTop:"8rem"}}>
        <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
        <h2 className="mentor-title-left" style={{ fontSize: "1.7rem" }}>DSA </h2>
          <h1 className="mentor-title-right" style={{ fontSize: "1.7rem" }}>Mentors</h1>
        </div>
        <br />
        <p className="mentor-title-description" style={{fontSize:"1.2rem"}}>
        Embark on a quest for excellence in <span style={{color:"rgb(106, 99, 244)",fontWeight:"700"}}>Data Structures and Algorithms</span> with top-rated mentors recognized by the learner community.</p>
        <br />
        <br />
      </div>
    <div className="interview-container">
      {/* Scrolling content with MentorCard components */}
      <div className="mentor-cards-wrapper">{mentorCards}</div>
    </div>
    </>
  );
};

export default Interview;
