import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
const Banner = () => {
    return (
        <div id='home'>
            {/* <div id='home' className='container mx-auto py-32 px-8'>
                <div class="grid  lg:grid-cols-2 gap-4 ">
                    <div data-aos="zoom-in-right"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                        className=' flex flex-col  justify-center'>
                        <h2 className='sm:text-xl md:text-5xl lg:text-7xl font-bold'><span className='text-[#081c15]'>Fasted Service</span>  <span className='text-[#74c69d]'>Short Time</span> <span className='text-[#081c15]'>Care</span></h2>
                        <p>Mastodon is a one stop vehicle aftersales solution for detailing, maintenance & paperwork. We provide Home/ Pick & Drop service</p>
                        <div>
                            <button className="btn btn-outline btn-success  lg:btn-md text-white my-4">Get More Info</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    ><figure><img className="shadow-lg shadow-gray-300/80" src="https://i.ibb.co/QYTHfH1/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance-146671-19689.jpg" alt="Album" /></figure></div>
                </div>
            </div> */}
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/3dqSZBQ/bg.jpg")`, backgroundPosition: 'left top' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='max-w-md'>
                        <h2 className='text-gray-300 text-2xl md:text-3xl lg:text-8xl font-semibold'>MASTODON</h2>
                        <div className="btn-group btn-group-vertical">
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Spare Parts </button>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2">Services</button>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-[#006a4e] hover:text-[#ffff] bg-gray-300 hover:bg-[#9abe4ecf] font-bold rounded-full px-16 py-4 m-2"> Buy a car</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

AOS.init();
export default Banner;