import React, { useRef } from 'react';
import { contact } from './data';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sy0t6bc', 'template_fk29vr9', form.current, 'nGp8R0GQrHx9GfHAs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <section className='section bg-gray-800 mt-12' id='contact' >
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title text-3xl py-3 text-base-300 before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                        Contact Me
                    </h2>
                    <p className='subtitle text-base-300 pb-2'>
                        If you have any kind of query fell free to ask me.Email me by completing the given form below..
                    </p>
                </div>
                <div
                    className='flex flex-col lg:gap-x-8 lg:flex-row py-4'
                >
                    <div
                        className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 p-2'
                    >
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            return (
                                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                    <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl text-base-300 mb-1 text-left'>{title}</h4>
                                        <p className='mb-1 text-paragraph text-base-300 text-left'>{subtitle}</p>
                                        <p className='text-accent font-normal text-left'>{description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <form ref={form}
                    onSubmit={sendEmail}
                        className='space-y-8 p-3 w-full max-w-[780px]'
                    >
                        <div className='flex gap-8'>
                            <input type="email" placeholder="Your email" name='name' class="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Your name" name='email' class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='flex gap-8 '>
                            <input type="text" placeholder="Subject" name='subject' class="input input-bordered w-full max-w-2xl" />
                        </div>
                        <div className='flex gap-8'>
                            <textarea
                                className='textarea w-full max-w-2xl'
                                placeholder='Your message'
                                name='message'
                            ></textarea>
                        </div>
                        <div className='text-left'>
                            <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;