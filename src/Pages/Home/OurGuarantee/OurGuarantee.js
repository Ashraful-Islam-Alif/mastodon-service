import React from 'react';

const OurGuarantee = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="300"
            className='container mx-auto px-8 my-4'>
            <h2 className='text-[#006a4e] container mx-auto text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Mastodon Guarantee</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                <div data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="300"
                    className='bg-[#ddd6fe] p-4'>
                    <img className='w-12 pb-2' src="https://storage.googleapis.com/gomechanic_assets/gaurantee_images/tow_truck_2_2.svg" alt="" srcset="" />
                    <h2 className='font-bold text-lg'>Free Pickup Drop</h2>
                </div>
                <div data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="=1000"
                    className='bg-[#ddd6fe] p-4'>
                    <img className='w-12 pb-2' src="https://storage.googleapis.com/gomechanic_assets/gaurantee_images/gear_5.svg" alt="" srcset="" />
                    <h2 className='font-bold text-lg'>Genuine Parts</h2>
                </div>
                <div data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className='bg-[#bbf7d0] p-4'>
                    <img className='w-12 pb-2' src="https://storage.googleapis.com/gomechanic_assets/gaurantee_images/warranty_2_1.svg" alt="" srcset="" />
                    <h2 className='font-bold text-lg'>30 Days Warranty</h2>
                </div>
                <div data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className='bg-[#bbf7d0] p-4'>
                    <img className='w-12 pb-2' src="https://storage.googleapis.com/gomechanic_assets/gaurantee_images/wallet_2_2.svg" alt="" srcset="" />
                    <h2 className='font-bold text-lg'>Affordable Prices</h2>
                </div>

            </div>
        </div>
    );
};

export default OurGuarantee;