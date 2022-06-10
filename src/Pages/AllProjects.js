import React from 'react';
import image from '../assets/projects/My project.png'
import image1 from '../assets/projects/My project (2).png'
import image2 from '../assets/projects/My project (3).png'

const AllProjects = () => {
    return (
        <section className='grid lg:grid-cols-3 gap-8'>
            <div>
                <div className='flex flex-col items-center text-center'>
                    <div className='mb-8 w-96'>
                        <img className='rounded-2xl' src={image} alt='' />
                    </div>
                    <p className='capitalize text-yellow-700 text-sm mb-3'>React js</p>
                    <h3 className='text-2xl text-white font-semibold capitalize mb-3'>Mason Hut</h3>
                    <p className='text-base-300 max-w-md'>
                       This is a manufacturer company based application.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center text-center'>
                    <div className='mb-8 w-96'>
                        <img className='rounded-2xl' src={image1} alt='' />
                    </div>
                    <p className='capitalize text-yellow-700 text-sm mb-3'>React js</p>
                    <h3 className='text-2xl text-white font-semibold capitalize mb-3'>Healthy Bite</h3>
                    <p className='text-base-300 max-w-md'>
                        This is a consultation service based application.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center text-center'>
                    <div className='mb-8 w-96'>
                        <img className='rounded-2xl' src={image2} alt='' />
                    </div>
                    <p className='capitalize text-yellow-700 text-sm mb-3'>React js</p>
                    <h3 className='text-2xl text-white font-semibold capitalize mb-3'>Daily Deals</h3>
                    <p className='text-base-300 max-w-md'>
                        This application is warehouse management based.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;