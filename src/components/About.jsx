// frontend/src/components/About.jsx

import React from 'react';
import { FaDownload, FaEnvelope, FaLightbulb, FaGraduationCap, FaBriefcase, FaTrophy, FaCalendarCheck, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import '../style/About.css';
import { Link } from 'react-router-dom';
import MyCV from '../assets/My CV.pdf';
import SoftSkill from '../assets/Developing Soft Skills and Personality.pdf';

const About = () => {
    return (
        <div>
            <div className="main">
            </div>
            <div className="header">
                <a href={MyCV} download="koushik's CV.pdf" target='blank'>
                    <button className="download-btn">
                        <FaDownload /> Download cv
                    </button>
                </a>
                <Link to="/contact">
                    <button className="contact-btn">
                        <FaEnvelope /> Contact Me
                    </button>
                </Link>
            </div>
            <section className="timeline-section" id="projects-timeline">
                <h2>
                    <FaLightbulb /> Projects
                </h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3>
                                Personal Portfolio Website.{" "}
                                <FaArrowUpRightFromSquare
                                    style={{
                                        cursor: "pointer",
                                    }}
                                />{" "}
                            </h3>
                            <p>
                                A responsive portfolio built with HTML, CSS, and JavaScript to showcase my work.
                            </p>
                            <span className="tech">Tech: HTML, CSS, JS</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3>
                                Daily Digestive Email application.{" "}
                                <FaArrowUpRightFromSquare
                                    style={{
                                        cursor: "pointer",
                                    }}
                                />
                            </h3>
                            <p>Developed a app to sending emails using Python.</p>
                            <span className="tech">Tech: Python, Pandas, Scikit-learn</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3>Smart Glasses Prototype</h3>
                            <p>
                                Assistive device for the visually impaired using Arduino and ultrasonic sensors.
                            </p>
                            <span className="tech">Tech: Arduino, C++</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-ab">
                <section className="Aboutme" id="education">
                    <h2>
                        <FaGraduationCap />
                        Educational Background
                    </h2>
                    <ul className="tab">
                        <li>
                            Bachelor of Science in Computer Science(AI), UEM (Newtown), 2028{" "}
                        </li>
                        <li>class 12(science) ,Baranagar Narendranath Vidyamandir</li>
                        <li>class 10 ,Baranagar RamaKrishna Mission Ashrama High School</li>
                    </ul>
                </section>
                <section className="Aboutme" id="experience">
                    <h2>
                        <FaBriefcase /> Experience
                    </h2>
                    <ul className="tab">
                        <li>Software Developer at Tech Solutions, 2020-2021</li>
                        <li>AI Researcher at Innovate Labs, 2022-Present</li>
                    </ul>
                </section>
                <section className="Aboutme" id="awards">
                    <h2>
                        <FaTrophy />
                        Awards and Achievements
                    </h2>
                    <ul className="tab">
                        <li> 87% in Madhyamik</li>
                        <li>
                            Participated Karate International{" "}
                            <FaDownload className="list-download-btn" />{" "}
                        </li>
                    </ul>
                </section>
                <section className="Aboutme" id="events">
                    <h2>
                        <FaCalendarCheck /> List of Events
                        (Organized/Attended)
                    </h2>
                    <ul className="tab">
                        <li>Organized: AI and Machine Learning Conference, 2023</li>
                        <li>Attended: International Tech Summit, 2022</li>
                    </ul>
                </section>
                <section className="Aboutme" id="presentations">
                    <h2>
                        <FaChalkboardTeacher />
                        Poster/Paper Presentation
                    </h2>
                    <ul className="tab">
                        <li>
                            Presented a paper on "Advancements in Neural Networks" at XYZ Conference, 2022
                        </li>
                    </ul>
                </section>
                <section className="Aboutme" id="courses">
                    <h2>
                        <FaBookOpen /> Courses Completed
                        (NPTEL/COURSERA/LinkedIn Learning)
                    </h2>
                    <ul className="tab">
                        <li>
                            Soft Skill Development (NPTEL) by IIT Kanpur
                            <a href={SoftSkill} download="Koushik's NPTEL certificate" target='blank'><FaDownload className="list-download-btn" /></a>
                        </li>
                        <li>Deep Learning Specialization (Coursera)</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default About;