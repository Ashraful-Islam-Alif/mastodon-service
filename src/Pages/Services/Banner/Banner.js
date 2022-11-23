import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Navbar from '../../../Pages/Home/Navbar/Navbar';
import SearchBox from '../../../Pages/SpareParts/Searchbox/SearchBox';
import { useState } from "react";
const Banner = () => {
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
    };

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
                        <div >
                            <form className='grid grid-rows-4 gap-4' ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input className='border' type="text" name="name" />
                                <label>Email</label>
                                <input className='border' type="email" name="email" />
                                <label>Message</label>
                                <Controller
                                    name="select"
                                    control={control}
                                    render={({ field }) => <Select
                                        {...field}
                                        options={[
                                            { value: "chocolate", label: "Chocolate" },
                                            { value: "strawberry", label: "Strawberry" },
                                            { value: "vanilla", label: "Vanilla" }
                                        ]}
                                    />}
                                />
                                <textarea name="message" />
                                <input className='border cursor-pointer bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center text-white' type="submit" value="Send" />
                            </form>

                            {/* ___________________________________________________________ */}

                            {/* <form className='grid grid-rows-4 gap-4' handleSubmit={onSubmit}>

                                <input {...register("firstName")} placeholder="First name" type="text" name="name" />
                                <input {...register("email")} placeholder="Email" type="email" name="email" />
                                <select {...register("category", { required: true })}>
                                    <option value="">Select...</option>
                                    <option value="A">Option A</option>
                                    <option value="B">Option B</option>
                                </select>
                                <textarea name="message" {...register("aboutYou")} placeholder="About you" />
                                <input type="submit" />
                            </form> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;