import React from 'react';
import './Subscription.css'
const Subscription = () => {
    return (
        <div id='subscription' className='subscriptionbg container mx-auto py-32 px-8 '>
            <div data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1500" className="hero-content text-center text-neutral-content ">
                <div className='grid md:grid-cols-2 items-center justify-items-center shadow-2xl'>
                    <div>
                        <img className='' src="https://i.ibb.co/wRwn1hj/istockphoto-1250077483-170667a.jpg" alt="" srcset="" />
                    </div>
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold text-black">SUBSCRIBE</h1>
                        <p className="mb-5 text-black">Subscribe to our newsletter & stay updated.</p>
                        <div className='flex justify-items-center p-2 m-3'>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs m-2 text-black" />
                            <button className="btn btn-success m-2 text-white">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscription;