import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='home'>
            <div id='home' className=' py-32 px-8 h-screen banner-image' style={{ backgroundImage: `url("https://i.ibb.co/3dqSZBQ/bg.jpg")` }}>
                {/* <div className="hero-overlay bg-opacity-50"></div> */}
                <div className='max-w-md'>
                    <h2 className='text-white text-2xl md:text-3xl lg:text-7xl font-semibold py-8'>Looking for?</h2>
                    <div className=" btn-group btn-group-vertical text-center">
                        <Link to='/buyCar' data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Detailing</Link>
                        <Link to='/spareParts' data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Spare Parts </Link>
                        <Link to='/service' data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Mechanics</Link>                    </div>
                </div>
            </div>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/3dqSZBQ/bg.jpg")`, backgroundPosition: 'left top' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='max-w-md'>
                        <h2 className='text-gray-300 text-2xl md:text-3xl lg:text-6xl font-semibold'>Looking for?</h2>
                        <div className=" btn-group btn-group-vertical">
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Spare Parts </button>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Mechanics</button>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2"> Garages</button>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 overflow-y-scroll shadow-xl w-84 h-80 p-4'>
                    <h2 className='font-bold mb-2'>Select Manufacturer</h2>
                    <div class="flex flex-wrap container mx-auto">
                        <input id="input-search" class="form-control me-2 bg-transparent p-2 border-0" type="search" placeholder="Search Brand"
                            aria-label="Search" />
                        <button onclick="loadBrand()" type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-lg border ">
                            <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                        </button>
                    </div>
                    <div className='grid grid-cols-3  justify-items-center gap-4 '>

                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/8YDyPNq/brand-9.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/st48pbF/brand-7.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/phTmG8f/brand-14.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/qgRB6sn/brand-5.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/CBmwcxP/brand-6.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/SPxdJpV/brand-16.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/R2HM0FT/brand-8.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/02JJd3g/brand-20.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/tJMGDwv/brand-32.jpg" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                        <button className='flex flex-col items-center  py-4  w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-12 h-12' src="https://i.ibb.co/g3Mz2R5/brand-43.png" alt="" srcset="" />
                            <h3 className='text-xs'>Maruti Suzuki </h3>
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );

};

AOS.init();
export default Banner;