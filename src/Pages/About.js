import React from 'react';
import about from '../assets/images/pexels-cottonbro-3201580 (1).jpg'

const About = () => {
    return (
        <section className='section bg-gray-800 py-8' id='about'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img
                        className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={about}
                        alt=''
                    />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl text-white lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Pranta Das
                            </h2>
                            <p className='mb-4 text-accent'>
                               Junior Frontend Web Developer
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8 text-white'>
                            Being passionate about web development I have been pursuing my Bachelor's in CSE from Daffodil International University. Currently, as a junior frontend developer, I am seeking out new technologies regarding web development continuously to keep myself updated. . <br />
                                <br />
                                When I was a teenager at school I like to resolve technical issues. But today, not much has changed. I started web development just from curiosity but the more I explored it, it has become a passion for me. Now I develop innovative applications besides resolving.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;