import React from 'react'; // Removed useState and useEffect as they are no longer needed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/About';
import Skills from './components/skill';
import Contact from './components/contact';
import Blogs from './components/blog';

// The state and useEffect logic for 'isMobile' is now removed.

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </Router>
    );
};

export default App;