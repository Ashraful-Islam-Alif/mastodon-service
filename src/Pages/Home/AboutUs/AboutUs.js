import React from 'react';
import Particle from '../../../components/Particle';
import Navbar from '../Navbar/Navbar';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='aboutus'>
                <Particle></Particle>
                <div className='aboutus flex flex-col'>
                    <div className='atext p-8 m-4 shadow-2xl py-24 my-12 bg-gray-200 bg-opacity-25'>
                        <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold '>Mission</h2>
                        <p className='text-lg lg:text-2xl text-black font-bold'>Recreating the Auto Detailing Industry in Bangladesh.</p>
                    </div>
                    <div className='atext p-8 m-4 shadow-2xl py-24 bg-gray-200 bg-opacity-25'>
                        <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold '>Vission</h2>
                        <p className='ttext-lg lg:text-2xl text-black font-bold'>Automate vehicle maintenance using tech and intelligence; cutting down the service hours.</p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AboutUs;