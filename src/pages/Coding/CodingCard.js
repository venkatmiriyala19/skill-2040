import React from 'react';
import "./styles/CodingCard.css"
const CodingCard = () => {
  return (
    <div className='Coding-card'>
        <div className='hearderTitle-button'>
            <h2 style={{fontSize:"1.5rem"}}>Array</h2>
            <button class="button-startnow" role="button">Start Now</button>
        </div>
        <br/>
        <p style={{paddingBottom:"0.6rem" }}>Total Questions 36</p>
        <p>Not yet started</p>
    </div>
  )
}

export default CodingCard;