import React from 'react';
import MentorCard from './MentorCard'; 
import "./styles/Interview.css";

const Interview = () => {
  // Create an array to repeat the MentorCard component
  const numberOfMentors = 6;
  const mentorCards = Array.from({ length: numberOfMentors }, (_, index) => (
    <MentorCard key={index} />
  ));

  return (
    <>
    <div className="top-mentors-container">
        <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
        <h2 className="mentor-title-left" style={{ fontSize: "1.7rem" }}>Top </h2>
          <h1 className="mentor-title-right" style={{ fontSize: "1.7rem" }}>Mentors</h1>
        </div>
        <br />
        <p style={{fontSize:"1.2rem"}}>
          In search of excellence? Explore the highest-rated mentors as recognized by the learner community.
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
        <p style={{fontSize:"1.2rem"}}>
          In search of excellence? Explore the highest-rated mentors as recognized by the learner community.
        </p>
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
