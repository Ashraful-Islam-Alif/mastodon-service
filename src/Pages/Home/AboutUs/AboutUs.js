import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Particle from '../../../components/Particle';
import auth from '../../../firebase.init';
import Loading from '../../Login/Login/Loading';
import Navbar from '../Navbar/Navbar';
import './AboutUs.css'
const AboutUs = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <>
            {
                loading ? (<Loading />)
                    :
                    (<div>
                        <Navbar></Navbar>
                        <div className='aboutus '>

                            <div className='atext p-8 m-4 shadow-2xl py-24 my-12 bg-gray-200 bg-opacity-25 h-screen'>
                                <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold my-8 text-center'>Our Company</h2>
                                <p className='text-lg lg:text-xl text-black text-start'>Mastodon Limited is a one stop vehicle aftersales solution for detailing, maintenance & paperwork. They provide Home/ Pick & Drop service. The company has since added multiple utilities to its services, such as; car wash, car repair, car buy & sell and a dedicated marketplace for authentic car parts and utilities. With a mission of recreating the Auto Detailing Industry in Bangladesh and making car maintenance easier than anything they are operating in the Bangladeshi market since 2015, or 2019 commercially.</p>
                            </div>
                            <Particle></Particle>
                            <div className='aboutus flex flex-col'>
                                <div className='atext p-8 m-4 shadow-2xl py-24 my-12 bg-gray-200 bg-opacity-25'>
                                    <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold my-8 text-center'>Mission</h2>
                                    <p className='text-lg lg:text-2xl text-black font-bold'>Recreating the Auto Detailing Industry in Bangladesh.</p>
                                </div>
                                <div className='atext p-8 m-4 shadow-2xl py-24 bg-gray-200 bg-opacity-25'>
                                    <h2 className='text-5xl lg:text-8xl text-[#006a4e] font-bold my-8 text-center'>Vission</h2>
                                    <p className='ttext-lg lg:text-2xl text-black font-bold'>Automate vehicle maintenance using tech and intelligence; cutting down the service hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </>



    );
};

export default AboutUs;