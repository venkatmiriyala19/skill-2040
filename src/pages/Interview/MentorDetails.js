import React from 'react';
import MentorBookings from './MentorBookings';
import './styles/MentorDetails.css'
import Profile from './styles/profile.png'

// import Microsoft from './styles/Microsoft.png';
// import Google from './styles/Google.jpg';
// import Apple from './styles/Apple.png';
// import OpenAI from './styles/OpenAI.png';
// import Telegram from './styles/Telegram.png';
// import Dell from './styles/Dell.png';
// import Spotify from './styles/Spotify.png';

export default function MentorDetails() {
    const numberOfJobs = 6;
        
  return (
    <div style={{display:'flex'}}>
    
      <div className="mentor-booking-container">
        {[...Array(numberOfJobs)].map((_, index) => (
          <MentorBookings key={index} />
        ))}
      </div>
      <div className='mentor-detailed-view'>
      <img className="profile-of-mentor" src={Profile} alt='Telegram'></img>
      
      </div>
    </div>
  )
}
