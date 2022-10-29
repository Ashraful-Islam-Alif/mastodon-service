import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Particle from '../../../components/Particle';
import auth from '../../../firebase.init';
import Loading from '../../Login/Login/Loading';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import './AboutUs.css'
import { useState } from 'react';
import Boxes from './Boxes';
import WhyUS from './WhyUS';
import OurCustomers from '../OurCustomers/OurCustomers';
const AboutUs = () => {
    const [user, loading] = useAuthState(auth);
    const [experience, setExperience] = useState(160);
    const [partnerBooking, setMonthBooking] = useState(160);
    return (
        <>
            {
                loading ? (<Loading />)
                    :
                    (<div>
                        <Navbar></Navbar>
                        <div className='aboutus '>

                            <div className='grid grid-cols-2 gap-4 p-8 m-4 '>
                                <div><p className='text-[#006a4e] font-bold'>More About Us</p>
                                    <h2 className='text-lg lg:text-3xl text-black font-medium my-6'>One stop vehicle aftersales solution for spare parts, maintenance & vehicle trading</h2>
                                    <p className=''>Mastodon is an online platform that connects the car users to design their car maintenance plan, purchase commodities, schedule service at their door everything altogether. Mastodon offers all kinds of vehicle maintenance support connecting skilled garages that meets the customer standards. In addition, Mastodon sources the most authentic spare parts and accessories from around the world. Our simplified technical solutions predict most reasonable price keeping our standards to a globally competitive level.</p>
                                    <div className='my-12'>
                                        <ul>
                                            <li className=''><span className='text-[#006a4e]'>•</span> Spare Parts & Accessories</li>
                                            <li className=''><span className='text-[#006a4e]'>•</span> Garages</li>
                                            <li className=''><span className='text-[#006a4e]'>•</span> Mechanics</li>
                                            <li className=''><span className='text-[#006a4e]'>•</span> Buy a Car</li>
                                        </ul>
                                    </div></div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='flex items-center mx-52 z-20'>
                                        <div className='w-72 h-20 bg-[#006a4e] p-4 text-white text-ellipsis  '>
                                            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                                                <div className='row-span-2 text-5xl'>
                                                    {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                                        {({ isVisible }) => (
                                                            <div style={{ height: 30 }}>
                                                                {isVisible ? <CountUp end={partnerBooking} /> : null}
                                                            </div>
                                                        )}
                                                    </VisibilitySensor> */}
                                                    <h2>4</h2>
                                                </div>
                                                <div className='col-span-1 m-0 p-0'><span>YEARS OF </span><span>EXPERIENCES</span></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=''><img src="https://i.ibb.co/Kj4JqMf/about-3-1-1.jpg" alt="" srcset="" /></div>
                                    <div className='relative'><img className='aboutAnimation' src="https://i.ibb.co/mz2R16C/about-3-2.jpg" alt="" srcset="" /></div>
                                    <div><img className='aboutAnimation2' src="https://i.ibb.co/0p0g2TT/about-3-3.jpg" alt="" srcset="" /></div>
                                </div>
                            </div>
                        </div>
                        <Boxes></Boxes>
                        <WhyUS></WhyUS>
                        <OurCustomers></OurCustomers>
                        {/* <Particle></Particle> */}
                        {/* <div className='aboutus flex flex-col'>
                                <div className='atext p-8 m-4 shadow-2xl py-24 my-12 bg-gray-200 bg-opacity-25'>
                                    <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold my-8 text-center'>Mission</h2>
                                    <p className='text-lg lg:text-2xl text-black font-bold'>Recreating the Auto Detailing Industry in Bangladesh.</p>
                                </div>
                                <div className='atext p-8 m-4 shadow-2xl py-24 bg-gray-200 bg-opacity-25'>
                                    <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold my-8 text-center'>Vission</h2>
                                    <p className='ttext-lg lg:text-2xl text-black font-bold'>Automate vehicle maintenance using tech and intelligence; cutting down the service hours.</p>
                                </div>
                            </div> */}
                        <Footer></Footer>
                    </div>)
            }
        </>



    );
};

export default AboutUs;