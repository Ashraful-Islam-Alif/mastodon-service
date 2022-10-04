import React from 'react';

const ContactUs = () => {
    return (
        <div id='contactus' className='container mx-auto py-6 px-8'>
            <h1 className="text-[#006a4e] text-2xl sm:text-4xl lg:text-6xl font-bold text-center py-8">Contact Us</h1>
            <div data-aos="fade-up"
                data-aos-duration="2000"
                className=" ">
                <div className="grid justify-items-center lg:grid-cols-2">
                    <div className="">

                        <img src="https://i.ibb.co/PsLRTd4/contactus.png" alt="" srcset="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input type="number" placeholder="phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;