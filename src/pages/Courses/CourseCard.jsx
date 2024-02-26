import React from "react";
import { Link } from "react-router-dom";
import "./styles/Courses.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdKeyboardArrowRight } from "react-icons/md";
import JavaScript from './styles/JavaScript-logo.png';
import HTML from './styles/html.png'
import CSS from './styles/CSS.png'
// import { Progress } from 'flowbite-react';


const CourseCard = () => {
  return (
    <div className="course-card">
        <div className="course-image">
        <img className="course-card-title-image" src={JavaScript} alt='Microsoft'></img></div>
        <div className="course-card-content">
      <div className='Course-hearderTitle-button'>
            <h2 style={{fontSize:"1.5rem",textAlign:'center'}}> <Link to='/skill2040/coursecontent' style={{textDecoration:'none'}} className='course-title-link' >
            JavaScript
            </Link></h2>
            {/* <MdKeyboardArrowRight style={{right:'0'}} /> */}
            
        </div>
        <br/>
        <div className="course-author-details-overview">
        <p style={{paddingBottom:"0.6rem" }}>By: Mohammed Farz</p>
        <p style={{paddingBottom:"0.6rem" ,marginBottom:'1rem'}}>Ex Google Employee</p>
        </div>
        <ProgressBar completed={60}  animateOnRender={true}     bgColor="rgb(106, 99, 244)" width="100%"/>
        {/* <Progress progress={45} />; */}
        </div>
    </div>
  );
};

export default CourseCard;