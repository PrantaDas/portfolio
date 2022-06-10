import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllProjects = ({ project }) => {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div>
            <div onClick={() => setSelectedId(project.id)} layoutId={project.id} className='flex flex-col items-center text-center'>
                <div className='mb-8 w-96'>
                    <img className='rounded-2xl' src={project.image} alt='' />
                </div>
                <p className='capitalize text-yellow-700 text-sm mb-3'>{project.type}</p>
                <Link to={`/projects/${project._id}`}><button className='btn btn-xs btn-primary'>Details</button></Link>
                <h3 className='text-2xl text-white font-semibold capitalize mb-3'>{project.title}</h3>
                <p className='text-base-300 max-w-md'>
                    {project.features}
                </p>
            </div>

        </div>
    );
};

export default AllProjects;