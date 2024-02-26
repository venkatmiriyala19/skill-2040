import React from "react";
import CodingCard from "./CodingCard"; // Assuming you have a CodingCard component
import "./styles/Coding.css"; // Import your CSS file for styling if needed

const Coding = () => {
  const codingCardData = [
    // You can provide data for each card if needed
    // For simplicity, I'm using an array of 9 null values
    // You can replace this with actual data for each card
    ...Array(9).fill(null),
  ];

  return (
    <>
      <div className="coding-heading-container">
        Code your way to top and win big in the 45 day DSA coding challenge by
        SKILL2040
        <button class="button-47" role="button">Start Now</button>
      </div>
      <div className="coding-container">
        {codingCardData.map((data, index) => (
          <CodingCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Coding;
