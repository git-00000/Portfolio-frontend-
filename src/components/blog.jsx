import React, { useState } from 'react';
import '../style/blog.css';

import me1 from '../assets/me1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog4 from '../assets/blog4.jpg';
import blog1 from '../assets/blog1.png';

// Define a separate data structure for your blogs
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
    // State to track which blogs are expanded
    const [expandedBlogs, setExpandedBlogs] = useState({});

    const toggleExpand = (id) => {
        setExpandedBlogs(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="main">
            <div className="blogcontainer">
                <section className="blog-hero">
                    <h1>Blogs by Rick - The Legend</h1>
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
                        <button onClick={() => toggleExpand(blog.id)} className="btn btn-sm read-more">
                            {expandedBlogs[blog.id] ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;