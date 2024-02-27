import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import "./styles/CourseContent.css";
import { FaRegCheckCircle } from "react-icons/fa";

const CourseContent = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  const handleMarkAsComplete = () => {
    setIsCompleted(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(prevTimeSpent => prevTimeSpent + 10);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <div className='main-video'>
        <div className="video-content" style={{ marginBottom: "1rem" }}>
          <div className="video-container">
            <ReactPlayer
              url='https://youtu.be/mzPxo7Y6JyA?feature=shared'
              width='96%'
              height='96%'
              controls={true}
            />
          </div>
        </div>
        <div className='bottom-video-content' style={{ marginTop: "-9rem" }}>
          <h1>HTML 5</h1>
          <p style={{ fontSize: "1.1rem", marginTop: "2rem" }}>HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors.</p>
          <p style={{ fontSize: "1.1rem" }}>HTML5 was first released in a public-facing form on 22 January 2008,[2] with a major update and "W3C Recommendation" status in October 2014.[5][6] Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4 but also XHTML1 and even the DOM Level 2 HTML itself.[7]</p>
          
          <div style={{marginTop:'10%'}}>
          <p style={{marginLeft:'2%'}}> Time Spent: {formatTime(timeSpent)}</p>
          <button
            className="mark-as-complete"
            onClick={handleMarkAsComplete}
            disabled={isCompleted} // Optional: Disable the button after it's marked as completed
          >
            {isCompleted ? <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Completed <FaCheckCircle style={{fontSize:'1.7rem',fontWeight:'800',marginLeft:'0.3rem'}}/> </div> : <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Mark as Completed <FaRegCheckCircle style={{fontSize:'1.7rem',fontWeight:'800',marginLeft:'0.3rem'}}/> </div>}
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
