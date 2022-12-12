import React from 'react';

const ServiceCategory = () => {
    return (
        <div className='container mx-auto py-24 px-8'>
            <h2 className='text-[#006a4e] text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Service Category</h2>
            <div className='grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/nBc0Q50/Clutch-Bumpers.png" alt="" srcset="" />
                    <h3 className='py-4'>Clutch & Body Parts </h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/0tzLJ0N/Suspension-Fitments.png" alt="" srcset="" />
                    <h3 className='py-4 text-center'>Suspension & Fitments</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/RHJzKTh/Windshields.png" alt="" srcset="" />
                    <h3 className='py-4'>Windshields & Lights</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/vP40Km6/Car-Inspection.png" alt="" srcset="" />
                    <h3 className='py-4'>Car Inspections</h3>
                </div>
                <div className='flex flex-col justify-center items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/TYx3yLS/Car-Spa-Cleaning.png" alt="" srcset="" />
                    <h3 className='py-4'>Car Spa & Cleaning</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;