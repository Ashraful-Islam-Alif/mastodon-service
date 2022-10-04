import React from 'react';
import Navbar from '../Navbar/Navbar';
import './AboutUs.css'
const AboutUs = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='aboutus flex flex-col'>
                <div className='atext p-8 m-4 shadow-2xl'>
                    <h2 className='text-8xl text-[#006a4e] font-bold '>Mission</h2>
                    <p className='text-2xl text-black font-bold'>Recreating the Auto Detailing Industry in Bangladesh.</p>
                </div>
                <div className='atext p-8 m-4 shadow-2xl'>
                    <h2 className='text-8xl text-[#006a4e] font-bold '>Vission</h2>
                    <p className='text-2xl text-black font-bold'>Automate vehicle maintenance using tech and intelligence; cutting down the service hours.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;