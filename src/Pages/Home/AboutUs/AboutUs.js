import React from 'react';

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div class="grid  lg:grid-cols-2 gap-4">
                <div class="grid grid-cols-2  gap-4">
                    <div className='col-span-2' data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"><figure><img className="shadow-lg shadow-green-300/80" src="https://i.ibb.co/R0FqGGT/repair-man-making-car-service.jpg" alt="Album" /></figure></div>
                    <div data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"


                    ><figure><img className="shadow-lg shadow-green-300/80" src="https://i.ibb.co/vVPtpdp/car-mechanic-changing-wheels-car.jpg" alt="Album" /></figure></div>
                    <div data-aos="flip-right"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1500"><figure><img className="shadow-lg shadow-green-300/80" src="https://i.ibb.co/vVPtpdp/car-mechanic-changing-wheels-car.jpg" alt="Album" /></figure></div>

                </div>
                <div data-aos="zoom-in-right"
                    data-aos-offset="200"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" className=' flex flex-col  justify-center  '>
                    <p className='text-green-400'>ABOUT OUR COMPANY</p>
                    <h2 className='text-3xl font-bold backdrop:text-[#081c15]'>WE OFFER HONEST & AFFORDABLE VEHICLE MAINTENANCE SOLUTIONS</h2>
                    <p className='py-3'>We are a highly qualified and efficient automobile service provider to offer you the best automotive services for any kinds of light and heavy vehicles. </p>
                    <div>
                        <button className="btn btn-success text-white my-4">Detail Info</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;