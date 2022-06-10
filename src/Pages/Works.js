import React from 'react';
import work1 from '../../src/assets/brands/behance.png'
import work2 from '../../src/assets/brands/dribbble.png'
import work3 from '../../src/assets/brands/fiverr.png'
import work4 from '../../src/assets/brands/freelancer.png'
import work5 from '../../src/assets/brands/upwork.png'

const Works = () => {
    return (
        <section className='min-h-[146px] bg-gray-900 flex items-center'>
            <div
                className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
                <div>
                    <img src={work1}alt="" />
                </div>
                <div>
                    <img src={work2}alt="" />
                </div>
                <div>
                    <img src={work3}alt="" />
                </div>
                <div>
                    <img src={work4}alt="" />
                </div>
                <div>
                    <img src={work5}alt="" />
                </div>
            </div>
        </section>
    );
};

export default Works;