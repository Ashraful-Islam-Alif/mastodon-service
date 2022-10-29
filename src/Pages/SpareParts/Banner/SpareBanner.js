import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import SearchBox from '../Searchbox/SearchBox';
import './SpareBanner.css'
import UpperBanner from './UpperBanner';

const SpareBanner = () => {
    return (
        <div className='bg-gray-100 sparebanner'>
            <Navbar></Navbar>
            <SearchBox></SearchBox>
            <UpperBanner></UpperBanner>
            <div className='container mx-auto  px-8 py-24 '>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className=" ">
                    <div className="grid justify-items-center lg:grid-cols-2">
                        <div className="flex flex-col justify-center mb-4">
                            <h2 className='text-[#006a4e] text-4xl md:text-6xl lg:text-8xl font-bold py-4'>Spare Parts</h2>
                            <p className='text-lg md:text-2xl lg:text-4xl py-4 '>For Genuine Spare Parts</p>
                            <div>
                                <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center">Request Brochure</button>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Full name" className="input input-bordered" />
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
                                    <input type="number" placeholder="Phone number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Which Spare Parts do you prefer?</option>
                                    <option>Brakes & Suspension</option>
                                    <option>Body Parts & Mirror</option>
                                    <option>Car Lights</option>
                                    <option>Car Lights</option>
                                    <option>Engine & Drive</option>
                                    <option>Electronic Parts</option>
                                    <option>Filter</option>
                                    <option>Car Accessories</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Parts Name</option>
                                    <option>Brakes</option>
                                    <option>AC Parts</option>
                                    <option>Tyres</option>
                                    <option>Steering</option>
                                    <option>Glassess</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Select Year Range</option>
                                    <option><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /></option>
                                </select>
                                <div className="form-control mt-6">
                                    <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Confirm Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpareBanner;