// NavItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ to, label }) => {
  const styling = {
    cursor: 'pointer', // Set cursor to pointer
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Navigate to the specified URL
  };

  return (
    <li className="nav__items">
      <div className="nav__link" style={styling} onClick={handleClick}>
        {label}
      </div>
    </li>
  );
};

export default NavItem;
