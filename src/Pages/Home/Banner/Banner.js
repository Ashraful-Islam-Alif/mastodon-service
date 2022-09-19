import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <div id='home' className='container mx-auto p-4'>
            <div class="grid  lg:grid-cols-2 gap-4 ">
                <div data-aos="zoom-in-right"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    className=' flex flex-col  justify-center '>
                    <h2 className='sm:text-xl md:text-3xl lg:text-6xl font-bold'><span className='text-[#081c15]'>Fasted Service</span>  <span className='text-[#74c69d]'>Short Time</span> Care</h2>
                    <p>Mastodon is a one stop vehicle aftersales solution for detailing, maintenance & paperwork. We provide Home/ Pick & Drop service</p>
                    <div>
                        <button className="btn btn-success  lg:btn-md text-white my-4">Get More Info</button>
                    </div>
                </div>
                <div data-aos="zoom-in-left"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"

                ><figure><img className="shadow-lg shadow-green-300/80" src="https://i.ibb.co/QYTHfH1/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance-146671-19689.jpg" alt="Album" /></figure></div>

            </div>
        </div>
    );

};

AOS.init();
export default Banner;