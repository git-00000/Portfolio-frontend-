import React, { useState } from 'react';
import '../style/blog.css';
// import ScrollDown from '../JS/ScrollDownT';

import me1 from '../assets/me1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog4 from '../assets/blog4.jpg';
import blog1 from '../assets/blog1.png';

const blogPosts = [
    {
        id: '1',
        title: 'Balancing Work and Life: A Creative’s Perspective',
        summary: 'Life as a creative professional is a blend of passion, hard work, and finding balance. In this lifestyle blog...',
        fullText: 'Life as a creative professional is a blend of passion, hard work, and finding balance. In this lifestyle blog, I share my experiences juggling projects, personal life, and self-care. From productivity hacks to travel adventures, each post offers a glimpse into my world. Join me as I navigate the highs and lows of a creative lifestyle, and find inspiration to live your best life.',
        image: me1
    },
    {
        id: '2',
        title: 'Architectural Marvels: Behind the Scenes of My Projects',
        summary: 'Welcome to my professional showcase blog, where I delve into the details of my architectural projects. Each post provides an in-depth look at the design process...',
        fullText: 'Welcome to my professional showcase blog, where I delve into the details of my architectural projects. Each post provides an in-depth look at the design process, from initial concepts to final execution. Discover the challenges faced, solutions implemented, and the creative decisions that shaped each project. This blog is a testament to my dedication to creating functional and aesthetically pleasing spaces.',
        image: blog2
    },
    {
        id: '3',
        title: 'Mastering Web Development: Tips, Tricks, and Tutorials',
        summary: 'As a web developer, I am passionate about sharing my knowledge and helping others grow in this dynamic field. This blog is a resource for aspiring developers, offering tutorials...',
        fullText: 'As a web developer, I am passionate about sharing my knowledge and helping others grow in this dynamic field. This blog is a resource for aspiring developers, offering tutorials, coding tips, and insights into the latest industry trends. Whether you’re a beginner or looking to refine your skills, you’ll find valuable information to enhance your web development journey',
        image: blog1
    },
    {
        id: '4',
        title: 'Visual Storytelling: My Photography Portfolio',
        summary: 'Photography is more than just capturing moments; it’s about telling stories through visuals. This blog showcases my portfolio, featuring a collection of my best work...',
        fullText: 'Photography is more than just capturing moments; it’s about telling stories through visuals. This blog showcases my portfolio, featuring a collection of my best work. Each photograph is accompanied by the story behind it, the techniques used, and the emotions it evokes. Dive into a world of visual storytelling and discover the beauty in everyday moments',
        image: blog4
    }
];

const Blog = () => {
    const [expandedBlogs, setExpandedBlogs] = useState({});
    const [review, setReview] = useState('');
    const [reviewStatus, setReviewStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleExpand = (id) => {
        setExpandedBlogs(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleReviewSubmit = async (event) => {
        event.preventDefault();

        if (review.trim() === '') {
            setReviewStatus('Please enter a review before submitting.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://portfolio-backend-mongo-nd6u.onrender.com/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: review })
            });

            if (response.ok) {
                setReviewStatus('Thanks for your review! It has been submitted successfully. 👍');
                setReview('');
            } else {
                setReviewStatus('Failed to submit review. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setReviewStatus('Server error. Please try again later.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setReviewStatus(''), 2000);
        }

    };

    return (
        <div className="main">
            <div className="blogcontainer">
                <section className="blog-hero">
                    <h1>Dreams, Code & Coffee – By Koushik</h1>
                    <p>
                        Thoughts, tips, and stories on web development, creativity, and life.
                    </p>
                </section>

                {blogPosts.map(blog => (
                    <div key={blog.id} className="blogitem">
                        <img alt={blog.title} className="blog-thumb" src={blog.image} />
                        <h2>{blog.title}</h2>
                        <p className="blog-text">
                            {expandedBlogs[blog.id] ? blog.fullText : blog.summary}
                        </p>
                        <button onClick={() => toggleExpand(blog.id)} className="btn-sm read-more">
                            {expandedBlogs[blog.id] ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                ))}
            </div>

            <footer className="blog-footer">
                <div className="review-section">
                    <h3>Leave a Review!</h3>
                    <form onSubmit={handleReviewSubmit} className="review-form">
                        <textarea
                            value={review}
                            onChange={handleReviewChange}
                            placeholder="Tell me what you think of the blog..."
                            rows="4"
                            className="review-textarea"
                            disabled={isSubmitting}
                        />
                        {reviewStatus === 'Thanks for your review! It has been submitted successfully. 👍' ? null : (

                            <button type="submit" className="btn-sm submit-review" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Review"}
                            </button>

                        )}
                    </form>
                    {reviewStatus && <p className="review-status">{reviewStatus}</p>}
                </div>

                {/* <hr style={{width: '100%', border: '1px solid rgba(255, 255, 255, 0.1)'}} /> */}

                <p className='footer-content'>
                    &copy; {new Date().getFullYear()} Koushik Bhowmick. All rights reserved.
                    <span className='lord-icon'>
                        <a href="https://www.linkedin.com/in/koushik-bhowmick-a832a5319/" target='-blank'>
                            <lord-icon
                                src="https://cdn.lordicon.com/fgctxlnd.json"
                                trigger="morph"
                                state="morph-circle"
                                colors="primary:#4bb3fd,secondary:#242424"
                                style={{ "width": "25px", "height": "25px" }}>
                            </lord-icon>

                        </a>
                        <a href="https://github.com/git-00000/" target='-blank'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ioihllwu.json"
                                trigger="hover"
                                colors="primary:#242424,secondary:#ffffff"
                                style={{ "width": "25px", "height": "25px" }}>
                            </lord-icon>
                        </a>
                        <lord-icon
                            src="https://cdn.lordicon.com/bjdrneur.json"
                            trigger="hover"
                            state="hover-draw"
                            colors="primary:#ffffff,secondary:#242424"
                            style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>

                        <a href="https://www.instagram.com/koushik.me_/" target='_blank'>
                            <lord-icon
                                src="https://cdn.lordicon.com/wgtaryar.json"
                                trigger="hover"
                                state="hover-rotate"
                                colors="primary:#4bb3fd,secondary:#f28ba8,tertiary:#ffc738,quaternary:#242424"
                                href="https://www.instagram.com/koushik.me_/"
                                style={{ "width": "25px", "height": "25px" }}>
                            </lord-icon>
                        </a>
                    </span>
                </p>
                <div className="footer-links">
                    <a href="#privacy" className="footer-link">Privacy Policy</a>
                    <a href="#terms" className="footer-link">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default Blog;