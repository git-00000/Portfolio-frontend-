import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import TypingEffect from '../JS/TypingEffect';
import '../style/home.css';
import MatterCanvas from '../JS/Matter';

// Import images from your assets folder
import me1 from '../assets/me1.jpg';
import rick from '../assets/RICK.png';

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            {!isMobile && <MatterCanvas />}

            <div className="main">

                <div className="infocontiner">
                    <div className="devinfo">
                        <div className="hello">Hi, It's </div>
                        <div className="name">koushik bhowmick</div>
                        <div className="about">
                            <TypingEffect />
                        </div>
                        <div className="moreabout">
                            I am a developer who loves creating interesting projects in my free time and
                            enjoys learning new programming languages
                        </div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/koushik-bhowmick-a832a5319/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/git-00000/" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                        <div className="buttons">
                            <Link download="koushik's CV.pdf" target='blank' className="btn" >Download CV</Link>
                        </div>
                    </div>
                    <div className="devpic">
                        <div className="flip_front">
                            <img alt="koushik bhowmick" className="front" src={me1} />
                        </div>
                        <div className="flip_back">
                            <img alt="koushik bhowmick" className="front" src={rick} />
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="bottom-text">
                    <p>Copyright © 2025 Koushik Bhowmick. All rights reserved.</p>
                </div>
            </footer>


        </>

    );
};

export default Home;