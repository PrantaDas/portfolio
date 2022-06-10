import React from 'react';
import Typewriter from 'typewriter-effect'

const Blogs = () => {
    return (
        <div className='min-h-[70vh] bg-gray-800 flex justify-center items-center'>
            <h2 className='font-bold text-3xl text-white '><Typewriter
                  options={{
                    strings: ['Coming Soon !'],
                    autoStart: true,
                    loop: true,
                  }}
                /></h2>
        </div>
    );
};

export default Blogs;