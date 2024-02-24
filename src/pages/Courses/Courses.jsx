import React from "react";
import "./styles/Courses.css";
import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <>
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