import React from 'react';
import './Subscription.css'
const Subscription = () => {
    return (
        <div id='subscription' className='subscriptionbg'>
            <div className="hero-content text-center text-neutral-content ">
                <div className='grid md:grid-cols-2 items-center'>
                    <div>
                        <img className='' src="https://i.ibb.co/wRwn1hj/istockphoto-1250077483-170667a.jpg" alt="" srcset="" />
                    </div>
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold text-black">SUBSCRIBE</h1>
                        <p className="mb-5 text-black">Subscribe to our newsletter & stay updated.</p>
                        <div className='flex justify-items-center p-2 m-3'>
                            <input type="text" placeholder="Your Email" className="input w-full max-w-xs m-2" />
                            <button className="btn btn-success m-2 text-white">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscription;