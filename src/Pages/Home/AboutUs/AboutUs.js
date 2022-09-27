import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id='aboutus' className='container mx-auto py-32 px-8'>
            <h2 className='text-[#e46161] text-center text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>About Us</h2>
            <div class="grid  lg:grid-cols-2 gap-4">
                <div class="grid grid-cols-2  gap-4">
                    <div data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    ><figure><img className="shadow-lg shadow-gray-300/80" src="https://i.ibb.co/vVPtpdp/car-mechanic-changing-wheels-car.jpg" alt="Album" /></figure></div>
                    <div data-aos="flip-right"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    ><figure><img className="shadow-lg shadow-gray-300/80" src="https://i.ibb.co/fn7jTMF/car-mechanist-making-car-service.jpg" alt="Album" /></figure></div>
                    <div className='' data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    ><figure><img className="shadow-lg shadow-gray-300/80" src="https://i.ibb.co/R0FqGGT/repair-man-making-car-service.jpg" alt="Album" /></figure></div>
                    <div className='' data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                    ><figure><img className="shadow-lg shadow-gray-300/80" src="https://i.ibb.co/mzm5sNZ/young-happy-couple-signing-documents-while-being-with-car-mechanic-repair-shop.jpg" alt="Album" /></figure></div>
                </div>
                <div data-aos="flip-left"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    className=' flex flex-col justify-center my-4'>
                    <h2 className='text-xl md:text-2xl font-bold text-[#f1b963] my-2'>WE OFFER HONEST & AFFORDABLE VEHICLE MAINTENANCE SOLUTIONS</h2>
                    <p className='my-3'>We are a highly qualified and efficient automobile service provider to offer you the best automotive services for any kinds of light and heavy vehicles. </p>
                    <p>Mastodon Limited is now a Microsoft for Startups Partner. We are a part of Microsoft for Starups Founders Hub!</p>
                    <div className='my-4'>
                        <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl hover:shadow-lg text-md px-5 py-2.5 text-center mr-2 mb-2 my-2">Detail Info</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;