import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AllProjects from './AllProjects';

const Projects = () => {
    return (
        <section id='portfolio' className='section bg-black mt-5'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title text-base-300 text-xl before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My latest Work
                    </h2>
                    <p className='subtitle text-base-300 p-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
                        labore nisium illum cupiditate reiciendis a numquam
                    </p>
                </div>
                <div className='my-4'>
                    <Link className='p-3 text-yellow-700' to='all'>All</Link>
                    <Link className='p-3 text-yellow-700' to='all'>React</Link>
                    <Link className='p-3 text-yellow-700' to='all'>JavaScript</Link>
                    <Link className='p-3 text-yellow-700' to='all'>Fullstack</Link>
                </div>
                <AllProjects></AllProjects>
            </div>
            <Outlet></Outlet>
        </section>
    );
};

export default Projects;