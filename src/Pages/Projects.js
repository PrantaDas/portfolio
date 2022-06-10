import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AllProjects from './AllProjects';

const Projects = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('https://powerful-beyond-19576.herokuapp.com/projects')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProjects(data);
        })
    },[])
    return (
        <section id='portfolio' className='section bg-black mt-5' >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title font-bold text-base-300 text-xl before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My latest Work
                    </h2>
                    <p className='subtitle text-base-300 p-2'>
                        As a junior web developer I have completed below mentioned projects.
                    </p>
                </div>
                <div className='my-4'>
                    <Link className='p-3 text-yellow-700' to='all'>All</Link>
                    <Link className='p-3 text-yellow-700' to='all'>React</Link>
                    <Link className='p-3 text-yellow-700' to='all'>JavaScript</Link>
                    <Link className='p-3 text-yellow-700' to='all'>Fullstack</Link>
                </div>
                <div className='grid lg:grid-cols-3 gap-8'>
                {
                    projects.map(project=><AllProjects key={project.id} project={project}></AllProjects>)
                }
                </div>
            </div>
            {/* <Outlet></Outlet> */}
        </section>
    );
};

export default Projects;