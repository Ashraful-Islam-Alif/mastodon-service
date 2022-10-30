import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import SearchBox from '../../SpareParts/Searchbox/SearchBox';

const Banner = () => {
    return (
        <div className='bg-gray-100 sparebanner'>
            <Navbar></Navbar>
            {/* <SearchBox></SearchBox> */}
            <div className='container mx-auto  px-8 py-24 '>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className=" ">
                    <div className="grid justify-items-center lg:grid-cols-2">
                        <div className="flex flex-col justify-center mb-4">
                            <h2 className='text-[#006a4e] text-4xl md:text-6xl lg:text-8xl font-bold py-4'>Buy A Car</h2>
                            <p className='text-lg md:text-2xl lg:text-4xl py-4 '>We will deliver you happiness for sure.</p>
                            <div>
                                <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center">Request Brochure</button>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="Full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="number" placeholder="Phone number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Which Brand do you Prefer</option>
                                    <option>Honda</option>
                                    <option>Hyundai</option>
                                    <option>Mahindra</option>
                                    <option>Toyota</option>
                                </select>
                                <div className="form-control">
                                    <input type="text" placeholder="Engine Volume?" className="input input-bordered" />
                                </div>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Which Brand do you Prefer</option>
                                    <option>Aveo</option>
                                    <option>Beat</option>
                                    <option>Captiva</option>
                                    <option>Cruze</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Run On?</option>
                                    <option></option>
                                </select>
                                <div className="form-control mt-6">
                                    <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;