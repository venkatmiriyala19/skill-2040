import React from 'react'
import "./styles/MentorBookings.css";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { Button } from 'react-scroll';

export default function MentorBookings() {
  return (    
    <>
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
            <a href="#" className="mentor-book-button">
                    Book Now
                </a>
            
          </div>          
        </div>
      </div>
    </>
  )
}
