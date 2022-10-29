import React from 'react';

const Boxes = () => {
    return (
        <div className='flex items-center justify-center gap-8 py-12'>
            <div className='bg-gray-400 p-6 rounded-2xl text-white'>
                <div className="radial-progress text-[#006a4e] " style={{ "--value": 400 }}>400</div>
                <h2> Garages</h2>
            </div>
            <div className='bg-gray-400 p-6 rounded-2xl text-white'>
                <div className="radial-progress text-[#006a4e]" style={{ "--value": 800 }}>800</div>
                <h2> Retail Shops</h2>
            </div>
            <div className='bg-gray-400 p-6 rounded-2xl text-white'>
                <div className="radial-progress text-[#006a4e]" style={{ "--value": 1200 }}>1200</div>
                <h2>Mechanics</h2>
            </div>
            <div className='bg-gray-400 p-6 rounded-2xl text-white'>
                <div className="radial-progress text-[#006a4e]" style={{ "--value": 16 }}>16</div>
                <h2>OES Partners</h2>
            </div>
        </div>
    );
};

export default Boxes;