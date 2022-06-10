import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';
import { Autoplay, Pagination } from 'swiper';


const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch(`https://powerful-beyond-19576.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProject(data);
            })
    }, [id])
    return (
        <div className='min-h-[70vh] bg-gray-800 px-10 pt-10 flex justify-center'>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          
              <SwiperSlide >
                <div
                  className='flex flex-col lg:flex-row gap-12 lg:gap-32'
                >
                  <div
                    className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                  >
                    <img className='rounded-2xl w-full h-full' src={project.image} alt='' />
                  </div>
                  <div
                    className='flex flex-col max-w-3xl'
                  >
                    <h5 className='font-body text-2xl text-left text-white mb-3 italic font-normal'>
                      {project.title}
                    </h5>
                    <div className='py-2'>
                      <p className='text-lg text-accent text-left pb-3'>{project.type}</p>
                      <p className='text-white text-left'><span className='text-secondary font-bold'>Technologies:</span>{project.technology}</p>
                      <p className='text-white text-left py-3'><span className='text-secondary font-bold'>Description: </span>{project.functionalities}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div
                  className='flex flex-col lg:flex-row gap-12 lg:gap-32'
                >
                  <div
                    className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                  >
                    <img className='rounded-2xl w-full h-full' src={project.image1} alt='' />
                  </div>
                  <div
                    className='flex flex-col max-w-3xl'
                  >
                    <h5 className='font-body text-2xl mb-8 italic font-normal'>
                      
                    </h5>
                    <div>
                    <p className='text-lg text-accent text-left pb-3'>{project.type}</p>
                      <p className='text-white text-left'>{project.technology}</p>
                      <p className='text-white text-left py-3'><span className='text-secondary font-bold'>Description: </span>{project.functionalities}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div
                  className='flex flex-col lg:flex-row gap-12 lg:gap-32'
                >
                  <div
                    className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                  >
                    <img className='rounded-2xl w-full h-full' src={project.image2} alt='' />
                  </div>
                  <div
                    className='flex flex-col max-w-3xl'
                  >
                    <h5 className='font-body text-2xl mb-8 italic font-normal'>
                      
                    </h5>
                    <div className='py-2'>
                    <p className='text-lg text-accent text-left pb-3'>{project.type}</p>
                      <p className='text-white text-left'>{project.technology}</p>
                      <p className='text-white text-left py-3'><span className='text-secondary font-bold'>Description: </span>{project.functionalities}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            
          
        </Swiper>
      </div>
    );
};

export default Details;