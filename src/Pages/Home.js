import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Service from './Service';
import Skills from './Skills';
import Works from './Works';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Works/>
            <About/>
            <Skills/>
            <Service/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;