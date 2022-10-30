import React from 'react';

const Boxes = () => {
    return (
        <div className='container mx-auto text-center  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
            <div className='bg-[#006a4e] p-6 rounded-2xl text-white shadow-2xl'>
                <div className="radial-progress text-gray-200 " style={{ "--value": 400 }}>400</div>
                <h2> Garages</h2>
            </div>
            <div className='bg-[#006a4e] p-6 rounded-2xl text-white shadow-2xl'>
                <div className="radial-progress text-gray-200" style={{ "--value": 800 }}>800</div>
                <h2> Retail Shops</h2>
            </div>
            <div className='bg-[#006a4e] p-6 rounded-2xl text-white shadow-2xl'>
                <div className="radial-progress text-gray-200" style={{ "--value": 1200 }}>1200</div>
                <h2>Mechanics</h2>
            </div>
            <div className='bg-[#006a4e] p-6 rounded-2xl text-white shadow-2xl'>
                <div className="radial-progress text-gray-200" style={{ "--value": 16 }}>16</div>
                <h2>OES Partners</h2>
            </div>
        </div>
    );
};

export default Boxes;