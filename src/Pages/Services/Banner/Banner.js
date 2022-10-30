import React from 'react';
import Navbar from '../../../Pages/Home/Navbar/Navbar';
import SearchBox from '../../../Pages/SpareParts/Searchbox/SearchBox';

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
                            <h2 className='text-[#006a4e] text-4xl md:text-6xl lg:text-8xl font-bold py-4'>Car Service</h2>
                            <p className='text-lg md:text-2xl lg:text-lg py-4 '>Get professional periodic car service, car repair, wheel care services, cashless insurance claim and much more done in the City of Joy; Dhaka.</p>
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
                                    <option disabled selected>Select your Car Type</option>
                                    <option>Small Sedan / Private Car</option>
                                    <option>Large Sedan/SUV/Hiace</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Select Your Service</option>
                                    <option>Economy - 1000 BDT </option>
                                    <option>Premium (Best Seller) - 2000 BDT</option>
                                    <option>Elite - 4000 BDT</option>
                                </select>
                                <select className="select select-bordered w-full max-w-xs font-normal">
                                    <option disabled selected>Add Ons</option>
                                    <option>Waterless Engine Bay - 1000 BDT </option>
                                    <option>Interior Deep Clean - 2000 BDT</option>
                                    <option>All Glass Clean - 1500 BDT</option>
                                    <option>Tyre & Rim Dressing - 2000 BDT</option>
                                    <option>Ceiling Deep Clean - 2000 BDT</option>
                                    <option>Water Supply - 2000 BDT</option>
                                    <option>Electric Supply - 3000 BDT/Hr</option>
                                </select>
                                <div className="form-control">
                                    <input type="date" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Schedule Your Service</button>
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