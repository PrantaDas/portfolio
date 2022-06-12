import React from 'react';
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { TiArrowMinimiseOutline } from "react-icons/ti";

const Service = () => {
    return (
        <section id='services' className='section mt-8'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title text-white text-xl before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
                        Which  Service I Provide
                    </h2>
                    <p className='subtitle text-base-300 py-2'>
                        List of services that I provide for the clients.
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 gap-8 py-5'>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <BsVectorPen />
                        </div>
                        <h4 className='text-xl text-yellow-700 text-left font-medium mb-2'>Branding</h4>
                        <p className='text-justify text-base-300'>Branding is the process of creating the look, feel, and persona for your company. The main goal of branding is to create a positive perception of your company in the public eye, shaping how you want customers to think about your brand. How your brand looks, communicates, and operates are all essential parts of the branding process.</p>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <MdOutlineDeveloperMode />
                        </div>
                        <h4 className='text-xl font-medium mb-2 text-yellow-700 text-left'>Web Development</h4>
                        <p className='text-justify text-base-300'>Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use depends on the types of tasks they are preforming and the platforms on which they are working.Web development skills are in high demand worldwide and well paid too – making development a great career option. It is one of the easiest accessible higher paid fields as you do not need a traditional university degree to become qualified.

                        </p>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <CgIfDesign />
                        </div>
                        <h4 className='text-xl text-yellow-700 font-medium mb-2 text-left'>Web Design</h4>
                        <p className='text-justify text-base-300'>Web design is what creates the overall look and feel when you’re using a website. It’s the process of planning and building the elements of your website, from structure and layout to images, colors, fonts and graphics.Web design has numerous components that work together to create the finished experience of a website, including graphic design, user experience design, interface design, search engine optimization (SEO) and content creation.</p>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <TiArrowMinimiseOutline />
                        </div>
                        <h4 className='text-xl text-left text-yellow-700 font-medium mb-2'>SEO</h4>
                        <p className='text-justify text-base-300'>SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;