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
                            <BsVectorPen/>
                        </div>
                        <h4 className='text-xl text-yellow-700 text-left font-medium mb-2'>Branding</h4>
                        <p className='text-justify text-base-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquam porro necessitatibus cum ab eos voluptas eaque rem nostrum officia, dignissimos ad maxime, explicabo sunt ratione labore iure error, tempore illo qui ea deserunt. Reprehenderit modi consectetur at exercitationem quod.</p>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <MdOutlineDeveloperMode/>
                        </div>
                        <h4 className='text-xl font-medium mb-2 text-yellow-700 text-left'>Wev Develoopment</h4>
                        <p className='text-justify text-base-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto alias dolor enim earum dicta nostrum odit animi, natus odio necessitatibus quia voluptatem totam temporibus quod, est delectus libero, possimus repellat iste consequuntur saepe. Nobis eos veritatis cumque ratione omnis?</p>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <CgIfDesign/>
                        </div>
                        <h4 className='text-xl text-yellow-700 font-medium mb-2 text-left'>Web Design</h4>
                        <p className='text-justify text-base-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus cupiditate neque beatae cum temporibus eligendi alias, corporis est quam deleniti harum eos veritatis necessitatibus vero similique dolores commodi impedit corrupti optio aperiam nisi possimus expedita voluptate. Recusandae, tenetur nihil?</p>
                    </div>
                    <div className='bg-gray-800 p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]'>
                            <TiArrowMinimiseOutline/>
                        </div>
                        <h4 className='text-xl text-left text-yellow-700 font-medium mb-2'>SEO</h4>
                        <p className='text-justify text-base-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate quo eaque laborum, amet eius nesciunt, distinctio sint adipisci sunt similique error odio! Harum, fugiat? Voluptas tempore, iste unde corrupti ad qui labore doloremque dolor assumenda vitae, vero odio adipisci.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;