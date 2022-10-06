import React from 'react';

const ProductCategory = () => {
    return (
        <div className='container mx-auto py-24 px-8'>
            <h2 className='text-[#006a4e] text-center text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Product Category</h2>
            <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/5srS13w/Belt-Chain-Drive.png" alt="" srcset="" />
                    <h3 className='py-4'>Belt & Chain Drive </h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/FJjHJG2/brake.png" alt="" srcset="" />
                    <h3 className='py-4'>Brake System</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/0X7DsNg/car-accessory-icon-particular-12.png" alt="" srcset="" />
                    <h3 className='py-4'>Car Accessories</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/4tX98cV/Engine-Cooling.png" alt="" srcset="" />
                    <h3 className='py-4'>Engine Cooling</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/dpPwQ7j/Exhaust-System.png" alt="" srcset="" />
                    <h3 className='py-4'>Exhaust System</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/B2SfL8s/Filters.png" alt="" srcset="" />
                    <h3 className='py-4'>Filters</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/tCKKQt5/Lubrication-Hydraulics.png" alt="" srcset="" />
                    <h3 className='py-4'>Oils & Fluids</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/TRybdNg/Seal-Gasket.png" alt="" srcset="" />
                    <h3 className='py-4'>Gasket & Seals</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/dPsrcf0/Steering.png" alt="" srcset="" />
                    <h3 className='py-4'>Steering</h3>
                </div>
                <div className='flex flex-col items-center bg-gray-100 py-4 rounded-2xl w-44 h-44 shadow-xl'>
                    <img className='w-24 h-24' src="https://i.ibb.co/HTb3cWn/Windshield.png" alt="" srcset="" />
                    <h3 className='py-4 p-2 text-center'>Windscreen Cleaning </h3>
                </div>
            </div>
        </div>
    );

};

export default ProductCategory;