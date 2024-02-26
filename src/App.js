import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Nav from './pages/Home/Nav/Nav';
import Coding from './pages/Coding/Coding';
import Jobs from './pages/Jobs/Jobs';
import MentorDetails from './pages/Interview/MentorDetails';
import Interview from './pages/Interview/Interview';
import CourseContent from './pages/Courses/CourseContent';
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skill2040/home" element={<Home />} />
          <Route path="/skill2040/courses" element={<Courses />} />
          <Route path="/skill2040/coursecontent" element={<CourseContent />} />
          <Route path="/skill2040/coding" element={<Coding />} />
          <Route path="/skill2040/jobs" exact element={<Jobs />} />
          <Route path="/skill2040/interview" exact element={<Interview />} />
          <Route path="/skill2040/interview/mentordetails" exact element={<MentorDetails />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
