import React from 'react';
import './Subscription.css'
const Subscription = () => {
    return (
        <div className='subscriptionbg'>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">SUBSCRIBE</h1>
                    <p className="mb-5">Subscribe to our newsletter & stay updated.</p>
                    <div className='flex justify-items-center p-2 m-3'>
                        <input type="text" placeholder="Your Email" className="input w-full max-w-xs m-2" />
                        <button className="btn btn-success m-2 text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;