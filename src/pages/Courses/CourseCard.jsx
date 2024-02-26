import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    return (
        <div className="course-card">
            <div className="course-card-content">
                <h2 className="course-card-title" style={{ color: 'white' }}>CSS</h2>
                <p className="course-card-body" style={{ color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                </p>
                
                <Link to="/skill2040/coursecontent" className="button">
  Learn More
</Link>
            </div>
        </div>
    );
};

export default CourseCard;