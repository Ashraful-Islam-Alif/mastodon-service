import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../Home/Navbar/Navbar';
import { toast } from 'react-toastify';
import './SpareBanner.css'
import UpperBanner from './UpperBanner';

const carModelData = [
    {
        name: "Audi",
        models: ["A3", "A4", "A5", "A6", "A7", "A8L", "Q2", "Q3", "Q5", "Q7", "Q8", "RS Q8"]
    },
    {
        name: "BMW",
        models: ["2 Series", "3 Series", "5 Series", "7 Series", "4 series coupe", "4 series gran coupe", "X1", "X2", "X3", "X5", "X7"]
    },
    {
        name: "Foton",
        models: ["Foton SUV", "Foton Microbus"]
    },
    {
        name: "Haval",
        models: ["H6 SUV", "H9 SUV", "JOLION"]
    },
    {
        name: "HONDA",
        models: ["Accord Turbo", "City", "Civic Turbo", "CR-V ", "CR-V Touring", "Fit", "Grace(Recondition)", "HR-V", "Vezel X L", "Vezel Ex"]
    }
];
const SpareBanner = () => {
    const { control } = useForm({
        defaultValues: {
            firstName: '',
            select: {}
        }
    });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_l0m2ihs', form.current, '_88G7qWVLDpe81zAy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toast('Order Place Successfully')
    };

    // Dynamic selection start
    const [{ carModel, model }, setData] = useState({});

    const countries = carModelData.map((carModel) => (
        <option key={carModel.name} value={carModel.name}>
            {carModel.name}
        </option>

    ));

    const models = carModelData.find(item => item.name === carModel)?.models.map((model) => (
        <option key={model} value={model}>
            {model}
        </option>
    ));

    function handlecarModelChange(event) {
        setData(data => ({ model: '', carModel: event.target.value }));
    }

    function handleStateChange(event) {
        setData(data => ({ ...data, model: event.target.value }));
    }

    // Dynamic selection End
    return (
        <div className='bg-gray-100 sparebanner'>
            <Navbar></Navbar>
            {/* <SearchBox></SearchBox> */}
            {/* <UpperBanner></UpperBanner> */}
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
                        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                            <div className="card-body">
                                <form className='grid grid-rows-4 gap-2' ref={form} onSubmit={sendEmail}>
                                    {/* <label className='my-2'>Name</label> */}
                                    <input placeholder='Full name' className='form-control input input-bordered' type="text" name="name" required />
                                    {/* <label className='my-2'>Email</label> */}
                                    <input placeholder='Email' className='form-control input input-bordered' type="email" name="email" required />
                                    <input placeholder='Phone Number' className='form-control input input-bordered' type="number" name="phone-number" required />
                                    <input className='form-control input input-bordered' placeholder='Address' name="address" required />
                                    {/* <label className='my-2'>Message</label> */}
                                    <div className='py-4'>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carBrand' value={carModel} onChange={handlecarModelChange} required>
                                            <option disabled selected>Which Brand do you Prefer? </option>
                                            {countries}

                                        </select>
                                    </div>
                                    <div className=''>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carModel' value={model} onChange={handleStateChange} required>
                                            <option disabled selected>Which Model do you Prefer? </option>
                                            {models}
                                        </select>
                                    </div>
                                    <textarea className='p-4 rounded-lg my-4 border' placeholder='Write if you have any intruction' name="message" />
                                    <input className='border cursor-pointer bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center text-white' type="submit" value="Confirm Order" />
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default SpareBanner;