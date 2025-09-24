// frontend/src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]); // Re-run the effect if the scrolled state changes

    return (
        <div className={`sidebar ${scrolled ? 'scrolled' : ''}`}> {/* Add the 'scrolled' class here */}

            <div className="hamburger">
                <div className="hover_text_div">Navbar</div>
                <span className="ham">
                    <div className="hamborder" />
                    <span className="ham">Koushik Bhowmick</span>
                </span>
                <span className="cross">
                    <div className="crossborder" />
                </span>
            </div>
            <nav>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About Me</NavLink>
                <NavLink to="/skills" activeClassName="active">Skills</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;