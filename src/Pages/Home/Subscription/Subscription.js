import React from 'react';
import './Subscription.css'
const Subscription = () => {
    return (
        <div id='subscription' className='subscriptionbg container mx-auto py-32 px-8 '>
            <div data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1500" className="hero-content text-center text-neutral-content ">
                <div className='grid md:grid-cols-2 items-center justify-items-center shadow-2xl p-4'>
                    <div>
                        <img className='' src="https://i.ibb.co/CmKdFms/istockphoto-1250077483-170667a.png" alt="" srcset="" />
                    </div>
                    <div className="max-w-lg ">
                        <h1 className="mb-5 px-10 text-3xl md:text-5xl font-bold text-[#006a4e]">SUBSCRIBE</h1>
                        <p className="mb-5 text-[#000]">Subscribe to our newsletter & stay updated.</p>
                        <div className='flex justify-items-center p-2 m-3'>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs  text-black" />
                                <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscription;