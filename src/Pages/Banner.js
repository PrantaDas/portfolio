import React from 'react';
import bannerImage from '../../src/assets/images/my-bg2.png';
import Particle from './Particle';


const Banner = () => {
  return (

    <>
      <Particle />
      <section
        id='home'
        className='lg:h-[85vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
      >
        <div className='container mx-auto h-full'>
          <div className='flex items-center h-full pt-8'>
            <div className='flex-1 flex flex-col items-center lg:items-start'>
              <p className='text-lg text-accent text-md mb-[22px]'>
                Hi there, I'm Pranta 👋
              </p>
              <h1 className='text-4xl text-white text-left leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                A true passionate<br />Web Developer.
              </h1>
              <p className='pt-4 text-white pb-8 leading-loose tracking-wide md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                An enthusiast and knoeledge seeker about web developing.Brings innovative ideas and solutions....
              </p>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
                <a href="https://drive.google.com/file/d/1NF7ffzZk88cxBFf8Hi_bBGRQgQBMPTt8/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
              </button>

            </div>
            <div className='hidden lg:flex flex-1 justify-end items-end h-full '>
              <img src={bannerImage} alt='' />
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default Banner;