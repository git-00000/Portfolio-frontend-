import React from 'react'
import '../style/skill.css'

const skill = () => {
    return (
        <>
            <div className="heading">
                <h2>It's me!!... 😃</h2>
                <p>
                    In my journey through the realms of technology and innovation, I have
                    cultivated a diverse set of skills that reflect my passion for continuous
                    learning and problem-solving. Below, you’ll find a detailed overview of
                    the skills that I bring to every project and challenge I undertake.
                </p>
            </div>
            <div className="intro">
                <div className="skills-container hard-skills">
                    <div
                        className="ring"
                        style={{
                            "--value": "50",
                        }}>
                        <div className="label">Programming Skills</div>
                    </div>
                    <div className="skill-panel">
                        <h4>Technical Skills</h4>
                        <div className="skill">
                            <div className="skill-name">
                                <i
                                    className="fa-brands fa-html5 fa-lg"
                                    style={{
                                        color: "#ee1111",
                                    }}
                                />
                                MERN stack
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "90%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">
                                {" "}
                                <i
                                    className="fa-brands fa-js fa-lg"
                                    style={{
                                        color: "#F0DB4F",
                                    }}
                                />
                                Django
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "50%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">
                                <i
                                    className="fa-brands fa-python fa-lg"
                                    style={{
                                        color: "#186eaf",
                                    }}
                                />
                                Python
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "70%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">
                                <i
                                    className="bx bxl-c-plus-plus"
                                    style={{
                                        color: "#4aaed2",
                                    }}
                                />
                                C/C++
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "80%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-container soft-skills">
                    <div
                        className="ring"
                        style={{
                            "--value": "70",
                        }}>
                        <div className="label">Soft Skills</div>
                    </div>
                    <div className="skill-panel">
                        <h4>Soft Skills</h4>
                        <div className="skill">
                            <div className="skill-name">Communication</div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "55%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">Teamwork</div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "90%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">Problem Solving</div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "80%",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">Time Management</div>
                            <div className="skill-bar">
                                <div
                                    className="skill-fill"
                                    style={{
                                        "--level": "90%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default skill
