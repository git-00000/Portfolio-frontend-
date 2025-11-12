import React, { useState } from 'react';
import styled from 'styled-components';
import '../style/blog.css';
// import ScrollDown from '../JS/ScrollDownT';

import me1 from '../assets/me1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog4 from '../assets/blog4.jpg';
import blog1 from '../assets/blog1.png';


const Button = ({ initialLikes, blogId }) => {
    // State to manage the like status (checked/unchecked) and count
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikes);

    const handleLikeToggle = () => {
        // Optimistic UI update
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);

        // Update the count based on the new state
        setLikeCount(prevCount => newIsLiked ? prevCount + 1 : prevCount - 1);

        // NOTE: In a real application, you would make an API call here
        // to persist the like/unlike action for this specific `blogId`.
        // e.g., fetch(`/api/blogs/${blogId}/like`, { method: newIsLiked ? 'POST' : 'DELETE' })
    };

    // Calculate the counts to display for the animation
    const countOne = likeCount; // Current or unliked count
    const countTwo = likeCount + 1; // Count when liked

    // Determine which count to show in the "one" and "two" slots for the animation
    const displayedCountOne = isLiked ? countOne - 1 : countOne;
    const displayedCountTwo = isLiked ? countOne : countOne + 1;


    return (
        <div className="like-wrapper">
            <div className="like-button">
                {/* Use a unique ID for each checkbox */}
                <input
                    className="on"
                    id={`heart-${blogId}`}
                    type="checkbox"
                    checked={isLiked}
                    onChange={handleLikeToggle}
                />
                <label className="like" htmlFor={`heart-${blogId}`}>
                    <svg className="like-icon" fillRule="nonzero" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    <span className="like-text">Likes</span>
                </label>
                <span className="like-count one">{displayedCountOne}</span>
                <span className="like-count two">{displayedCountTwo}</span>
            </div>
        </div>
    );
}

// --- End of Button Component & StyledWrapper ---

const blogPosts = [
    // Adding an initial 'likes' property to simulate dynamic data
    {
        id: '1',
        title: 'Balancing Work and Life: A Creative’s Perspective',
        summary: 'Life as a creative professional is a blend of passion, hard work, and finding balance. In this lifestyle blog...',
        fullText: 'Life as a creative professional is a blend of passion, hard work, and finding balance. In this lifestyle blog, I share my experiences juggling projects, personal life, and self-care. From productivity hacks to travel adventures, each post offers a glimpse into my world. Join me as I navigate the highs and lows of a creative lifestyle, and find inspiration to live your best life.',
        image: me1,
        initialLikes: 68 // Example starting likes
    },
    {
        id: '2',
        title: 'Architectural Marvels: Behind the Scenes of My Projects',
        summary: 'Welcome to my professional showcase blog, where I delve into the details of my architectural projects. Each post provides an in-depth look at the design process...',
        fullText: 'Welcome to my professional showcase blog, where I delve into the details of my architectural projects. Each post provides an in-depth look at the design process, from initial concepts to final execution. Discover the challenges faced, solutions implemented, and the creative decisions that shaped each project. This blog is a testament to my dedication to creating functional and aesthetically pleasing spaces.',
        image: blog2,
        initialLikes: 15
    },
    {
        id: '3',
        title: 'Mastering Web Development: Tips, Tricks, and Tutorials',
        summary: 'As a web developer, I am passionate about sharing my knowledge and helping others grow in this dynamic field. This blog is a resource for aspiring developers, offering tutorials...',
        fullText: 'As a web developer, I am passionate about sharing my knowledge and helping others grow in this dynamic field. This blog is a resource for aspiring developers, offering tutorials, coding tips, and insights into the latest industry trends. Whether you’re a beginner or looking to refine your skills, you’ll find valuable information to enhance your web development journey',
        image: blog1,
        initialLikes: 42
    },
    {
        id: '4',
        title: 'Visual Storytelling: My Photography Portfolio',
        summary: 'Photography is more than just capturing moments; it’s about telling stories through visuals. This blog showcases my portfolio, featuring a collection of my best work...',
        fullText: 'Photography is more than just capturing moments; it’s about telling stories through visuals. This blog showcases my portfolio, featuring a collection of my best work. Each photograph is accompanied by the story behind it, the techniques used, and the emotions it evokes. Dive into a world of visual storytelling and discover the beauty in everyday moments',
        image: blog4,
        initialLikes: 29
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
            // Hide status message after 3 seconds
            setTimeout(() => setReviewStatus(''), 3000);
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
                        <div className="blog-header">
                            <h2>{blog.title}</h2>
                            {/* --- Integrated Button Component --- */}
                            <Button initialLikes={blog.initialLikes} blogId={blog.id} />
                        </div>
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