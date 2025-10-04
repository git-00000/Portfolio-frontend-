import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Make sure to install react-icons
import '../style/ScrollDown.css';

const ScrollDown = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight, // Scrolls down one full viewport height
      behavior: 'smooth'
    });
  };

  return (
    <a href="#" className="scroll-down" onClick={handleScroll}>
      <span>Scroll down</span>
      <FaArrowDown className="arrow-icon" />
    </a>
  );
};

export default ScrollDown;