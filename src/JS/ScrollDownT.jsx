import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // ensure react-icons installed

const ScrollDown = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight, // Scrolls down one full viewport height
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button className="scroll-down" onClick={handleScroll}>
        <span>Scroll down</span>
        <FaArrowDown className="arrow-icon" />
      </button>

      {/* Inline CSS inside JSX */}
      <style>{`
        .scroll-down {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #777;
          font-size: 1rem;
          font-weight: 300;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .scroll-down:hover {
          opacity: 1;
        }

        .scroll-down span {
          margin-bottom: 5px;
          font-family: 'Arial', sans-serif;
          animation: floatPulse 2s ease-in-out infinite;
        }

        .scroll-down .arrow-icon {
          font-size: 1.5rem;
          animation: bounce 1.5s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes floatPulse {
          0% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.00278054; /* almost invisible mid animation */
          }
          100% {
            transform: translateY(0);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollDown;
