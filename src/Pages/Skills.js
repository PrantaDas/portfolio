import React from 'react';
import skill1 from '../assets/skills/html5.png'
import skill2 from '../assets/skills/css3.png'
import skill3 from '../assets/skills/nextjs.png'
import skill4 from '../assets/skills/nodejs.png'
import skill5 from '../assets/skills/reactjs.png'
import skill6 from '../assets/skills/js.png'
import skill7 from '../assets/skills/figma.png'
import skill8 from '../assets/skills/git.png'

const Skills = () => {
    return (
        <section className='bg-tertiary py-12 bg-gray-900 sm:px-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-8 md:grid-flow-col'>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill1} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill2} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill3} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill4} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill5} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill6} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill7} alt='' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='lg:h-20' src={skill8} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;