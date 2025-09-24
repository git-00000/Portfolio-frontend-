import React, { useState, useEffect } from 'react';
import '../style/contact.css';

const Contact = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // State to manage UI feedback (loading, success, error)
    const [status, setStatus] = useState('');

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Use the environment variable for the base URL
        const apiUrl = process.env.REACT_APP_DJANGO_API_URL;

        try {
            const response = await fetch(`${apiUrl}/api/contacts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Submission successful!');
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                console.error('Submission failed with status:', response.status);
                setStatus('error');
            }
        } catch (error) {
            console.error('An error occurred during submission:', error);
            setStatus('error');
        }
    };

    // ✅ Auto-hide success message after 2 seconds
    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('');
            }, 2000);
            return () => clearTimeout(timer); // cleanup
        }
    }, [status]);

    return (
        <>
            <section className="contact">
                <div className="content">
                    <h2>contact us</h2>
                    <p>
                        Feel free to reach out for collaborations, project discussions, or any
                        exciting opportunities.
                    </p>
                </div>
                <div className="container">
                    {/* Contact Info Section */}
                    <div className="contactInfo">
                        {/* --- Address --- */}
                        <div className="box">
                            <div className="icon">
                                {/* Location Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                    style={{ fill: '#fff', width: '20px', height: '20px' }}>
                                    <path d="M215.7 499.2C267 433.2...z" />
                                </svg>
                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>
                                    Matkal, Kalitala <br /> po: Rabindrangar <br />
                                    kol - 700065
                                </p>
                            </div>
                        </div>

                        {/* --- Phone --- */}
                        <div className="box">
                            <div className="icon">
                                {/* Phone Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    style={{ fill: '#fff', width: '20px', height: '20px' }}>
                                    <path d="M164.9 24.6c-7.7-18.6...z" />
                                </svg>
                            </div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+917003372615</p>
                            </div>
                        </div>

                        {/* --- Email --- */}
                        <div className="box">
                            <div className="icon">
                                {/* Envelope Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    style={{ fill: '#fff', width: '20px', height: '20px' }}>
                                    <path d="M480 32H32C14.3 32...z" />
                                </svg>
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>koushikbhowmick04@gmail.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <h2 className="txt">connect with us</h2>
                        <ul className="sci">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    {/* Facebook Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        style={{ fill: '#fff', width: '20px', height: '20px' }}>
                                        <path d="M504 256C504 119...z" />
                                    </svg>
                                </a>
                            </li>
                            {/* Add other socials here */}
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="contactForm" id="contactForm">
                        <form onSubmit={handleSubmit}>
                            <h2>Get In Touch</h2>
                            <div className="inputBox">
                                <input id="name" name="name" required type="text"
                                    value={formData.name} onChange={handleChange} />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input id="Email" name="email" required type="text"
                                    value={formData.email} onChange={handleChange} />
                                <span>Email</span>
                                <div className="form-text" id="emailHelp">
                                    We'll never share your email & phone with anyone else.
                                </div>
                            </div>
                            <div className="inputBox">
                                <input id="phone" name="phone" required type="text"
                                    value={formData.phone} onChange={handleChange} />
                                <span>Phone No.</span>
                            </div>
                            <div className="inputBox" id="scroll">
                                <textarea name="message" required
                                    value={formData.message} onChange={handleChange} />
                                <span>Type Your Message...</span>
                            </div>
                            <div className="inputBox">
                                <button className="send-btn" type="submit"
                                    disabled={status === 'submitting'}>
                                    <span className="btn-text">
                                        {status === 'submitting' ? 'Sending...' : 'Send'}
                                    </span>
                                </button>
                            </div>
                            {status === 'success' && (
                                <div className="status-message success">Message sent successfully!</div>
                            )}
                            {status === 'error' && (
                                <div className="status-message error">Failed to send message. Please try again.</div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
