import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HomeBanner = () => {
    return (
        <div className='' >
            <div id='home' className='container mx-auto py-32 px-8  min-h-screen bg-no-repeat ' style={{ backgroundImage: `url("https://i.ibb.co/QYTHfH1/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance-146671-19689.jpg")` }}>

                <div class="grid lg:grid-cols-2 gap-4">

                    <div
                        className=' flex flex-col justify-center'>
                        <h2 className='text-[#006a4e] text-2xl md:text-3xl lg:text-6xl font-semibold'>mastodon</h2>
                        <h3 className='text-[#000] text-xl md:text-3xl mb-8 font-semibold'>The | Automation | Automobile</h3>

                        <div className='flex flex-col '>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-full hover:shadow-lg md:text-lg px-5 py-5  mr-2 mb-2 my-2 w-3/4 md:w-1/3 ">Spare Parts </button>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-full md:text-lg px-5 py-5  mr-2 mb-2 my-2 w-3/4 md:w-1/3 hover:shadow-lg">Services</button>
                            <button data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-full md:text-lg px-5 py-5  mr-2 mb-2 my-2 w-3/4 md:w-1/3 hover:shadow-lg"> Buy a car</button>
                        </div>
                    </div>

                    <div data-aos="fade-down-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500" className='flex justify-center '>
                        <img className='xs:w-2/3 md:h-[500px] md:w-[1000px] ' src="https://i.ibb.co/m9gMfdg/green-sports-car-isolated-white-vector-53876-64420.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;