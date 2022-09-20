import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <div className=''>
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
                            <button className="btn btn-success  lg:btn-md text-white my-4">Get More Info</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    ><figure><img className="shadow-lg shadow-gray-300/80" src="https://i.ibb.co/QYTHfH1/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance-146671-19689.jpg" alt="Album" /></figure></div>
                </div>
            </div> */}
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/QYTHfH1/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance-146671-19689.jpg")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="max-w-2xl">
                        <h2 className='sm:text-xl md:text-5xl lg:text-7xl font-bold'><span className='text-rose-500'>Fasted Service</span>  <span className='text-green-500'>Short Time Care</span></h2>
                        <p className='text-white lg:text-xl'>Mastodon is a one stop vehicle aftersales solution for detailing, maintenance & paperwork. We provide Home/ Pick & Drop service</p>
                        <button className="btn btn-success  lg:btn-md text-white my-4">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

AOS.init();
export default Banner;