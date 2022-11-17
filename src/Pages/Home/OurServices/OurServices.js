import React from 'react';
import { Link } from 'react-router-dom';

const OurServices = () => {
    return (
        <div className='container mx-auto px-8'>
            <h2 className='text-[#006a4e] container mx-auto text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Our Services</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-8'>
                <div
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-back">
                    <div className='shadow-2xl'><img className='rounded-xl' src="https://i.ibb.co/P6nFBYk/1.jpg" alt="" srcset="" /></div>
                    <div className='my-4'><Link to='/service' className='text-white hover:bg-[#94ca21cf] rounded-xl mt-4 py-2 px-2 bg-[#1cbf1f90]'>Get More Info</Link></div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300" >
                    <div className='shadow-2xl'><img className='rounded-xl' src="https://i.ibb.co/CQYstQ0/2.jpg" alt="" srcset="" /></div>
                    <div className='my-4'><Link to='/spareParts' className='text-white hover:bg-[#94ca21cf] rounded-xl  mt-4 py-2 px-2 bg-[#1cbf1f90]'>Get More Info</Link></div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="0" >
                    <div className='shadow-2xl'><img className='rounded-xl' src="https://i.ibb.co/8X9N2y5/3.jpg" alt="" srcset="" /></div>
                    <div className='my-4'><Link to='/buyCar' className='text-white hover:bg-[#94ca21cf] rounded-xl mt-4 py-2 px-2 bg-[#1cbf1f90]'>Get More Info</Link></div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;