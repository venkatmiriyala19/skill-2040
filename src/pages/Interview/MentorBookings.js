import React from 'react'
import "./styles/MentorBookings.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { Button } from 'react-scroll';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use";

export default function MentorBookings() {
  const [isBookingCompleted, setIsBookingCompleted] = useState(false);
  const [stopConfetti, setStopConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const handleBookNowClick = () => {
    // Perform any booking logic here
    
    // Set booking as completed
    setIsBookingCompleted(true);
  
    // Trigger confetti effect
    showConfettiToast();
  };
  
  const showConfettiToast = () => {
    toast.success("Hooray! You've successfully booked the mentorship", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
    });
  
    // Stop confetti after 5 seconds (5000 milliseconds)
    // const confettiTimer = setTimeout(() => {
    //   setStopConfetti(true);
    // }, 10000);
  
    // // Clear the timer when the component unmounts or when the effect runs again
    // return () => clearTimeout(confettiTimer);
  };
  
  return (    
    <>
    {/* {isBookingCompleted && (
      <Confetti width={width} height={height + window.scrollY} gravity={0.01} />
    )} */}
        <div className='mentor-booking-card'>
        <div className='mentor-booking-header'>
          <h3 className='mentor-booking-title'>Personal Mentorship</h3>
        </div>
        <div className='mentor-booking-description'>
          <div className='mentor-booking-details'>
            <IoLocationOutline style={{ fontSize: "25px", color: "rgb(125, 120, 219)",marginRight:'5%',marginBottom:'2%' }} />
            <p>Online</p>
          </div>
          <div className='mentor-booking-details'>
            <CiDollar style={{ fontSize: "25px", color: "rgb(125, 120, 219)",marginRight:'5%',marginBottom:'1.7%' }} />
            <p>Free</p>
          </div>
          <div className='mentor-booking-details2'>
            <MdAccessTime style={{ fontSize: "25px", color: "rgb(125, 120, 219)",marginRight:'5%',marginBottom:'2%' }} />
            <p style={{fontSize:'0.9rem'}}>30 Minutes</p>
            <a href="#" className="mentor-book-button" onClick={handleBookNowClick}>
                    Book Now
                </a>
            
          </div>          
        </div>
      </div>
    </>
  )
}
