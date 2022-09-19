import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mx-auto p-4'>
            <h1 className="text-4xl font-bold text-center py-8">Contact Us</h1>
            <div data-aos="fade-up"
                data-aos-duration="3000"
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
                                <button className="btn btn-success text-white">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;