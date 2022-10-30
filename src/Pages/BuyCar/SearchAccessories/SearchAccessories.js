import React from 'react';

const SearchAccessories = () => {
    return (
        <div className='container mx-auto py-24 px-8'>
            <h2 className='text-[#006a4e] text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Select Your Accessories</h2>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/xhB9v0N/car-infotainment.png" alt="" srcset="" />
                    <h3 className='py-4'>Car Infotainment</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/f2GcksY/miscellaneous.png" alt="" srcset="" />
                    <h3 className='py-4 text-center'>Miscellaneous</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/J3py45K/bike-access.png" alt="" srcset="" />
                    <h3 className='py-4'>Bike Accessories</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/DV8bYf4/car-electronics.png" alt="" srcset="" />
                    <h3 className='py-4'>Car Electronics</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/dc1vCnZ/car-care.png" alt="" srcset="" />
                    <h3 className='py-4'>Car Care</h3>
                </div>
            </div>
        </div>
    );
};

export default SearchAccessories;