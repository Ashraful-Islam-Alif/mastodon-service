import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container mx-auto py-24 px-8'>

                <h2 className='text-[#006a4e] text-center text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Blogs</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 p-4'>
                    <div className="card  bg-base-100 shadow-xl ">
                        <figure><img className='p-2 rounded-2xl' src="https://i.ibb.co/Yy9HjkT/mid-adult-mechanic-writing-clipboard-while-repairing-car-engine-with-coworker-auto-repair-shop.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">PaperWorks</h2>
                            <p>Vehicle Paperwork is frequently seen as a highly complex procedure due to the numerous paperwork difficulties that it entails. At Mastodon, you can get experienced Vehicle Paperwork service.</p>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className='p-2 rounded-2xl' src="https://i.ibb.co/mCsKkM2/two-cars-lifting-maintenance-garage-service-station.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Maintenance</h2>
                            <p>We have professional automobile care service partners with Skilled mechanics. We are making a one-stop car care service solution because your flexibility is our main priority.</p>                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className='p-2 rounded-2xl' src="https://i.ibb.co/pjRj0dJ/man-reading-address-box-deliver.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Pick & Drop Service</h2>
                            <p>We provide any type of transportation that you wish or best suited for the materials you want to shift.After service completion - you can pay through online or cash on delivery. After payment, please make sure that you have received the SMS containing the money receipt. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;