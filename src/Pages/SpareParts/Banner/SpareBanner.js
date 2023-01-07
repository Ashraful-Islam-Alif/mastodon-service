import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../Home/Navbar/Navbar';
import { toast } from 'react-toastify';
import './SpareBanner.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
// import UpperBanner from './UpperBanner';

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

        emailjs.sendForm('gmail', 'template_zwg62jc', form.current, 'eTaI0igbbK46QsEv7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toast('Order Place Successfully')
    };

    // Dynamic selection for car database start
    const [carModelData, setCarModelData] = useState([])

    useEffect(() => {
        fetch('CarDatabase.json')
            .then(res => res.json())
            .then(data => setCarModelData(data))
    }, [])
    const [{ carModel, model }, setData] = useState({});

    const brands = carModelData.map((carModel) => (
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
        const Carbrands = event?.target?.value;
        setbrands(Carbrands)
    }

    function handleStateChange(event) {
        setData(data => ({ ...data, model: event.target.value }));
        const carModel = event?.target?.value;
        setmodel(carModel)
    }

    // Dynamic selection for car database End

    // Dynamic selection category and type started
    const [sparePartsCategoryTypeData, setsparePartsCategoryTypeData] = useState([])

    useEffect(() => {
        fetch('SparePartsCategoryType.json')
            .then(res => res.json())
            .then(data => setsparePartsCategoryTypeData(data))
    }, [])
    const [{ allCategoryData, type }, setCategoryData] = useState({});
    const [Cbrands, setbrands] = useState();
    const [Cmodel, setmodel] = useState();
    const [CCategories, setCategories] = useState();
    const [CTypes, setTypes] = useState();

    const Categories = sparePartsCategoryTypeData.map((allCategoryData) => (
        <option key={allCategoryData.name} value={allCategoryData.name}>
            {allCategoryData.name}
        </option>
    ));

    const types = sparePartsCategoryTypeData.find(item => item.name === allCategoryData)?.types.map((type) => (
        <option key={type} value={type}>
            {type}
        </option>
    ));
    // const partsNames = sparePartsCategoryTypeData.find(item => item.name === type)?.types.partsNames.map((partsName) => (
    //     <option key={partsName} value={partsName}>
    //         {partsName}
    //     </option>
    // ));

    function handleCategoryChange(event) {
        setCategoryData(data => ({ type: '', allCategoryData: event.target.value }));
        const carPackage = event?.target?.value;
        setCategories(carPackage);
    }

    function handleTypeChange(event) {
        setCategoryData(data => ({ ...data, type: event.target.value }));
        const carPrice = event?.target?.value;
        setTypes(carPrice);
    }
    // function handlePartsNameChange(event) {
    //     setCategoryData(data => ({ ...data, type: event.target.value }));
    // }

    // Dynamic selection selection category and type Ended

    const [user] = useAuthState(auth)
    // console.log(user);
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
                                    <input placeholder="Full Name" className='form-control input input-bordered' type="text" name="name" required />
                                    {/* <label className='my-2'>Email</label> */}
                                    <input placeholder="Email" className='form-control input input-bordered' type="email" name="email" required />
                                    <input placeholder='Phone Number' className='form-control input input-bordered' type="number" name="number" required />
                                    <input className='form-control input input-bordered' placeholder='Address' name="address" required />
                                    {/* <label className='my-2'>Message</label> */}
                                    <div className='py-4'>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carBrand' value={carModel} onChange={handlecarModelChange} required>
                                            <option disabled selected>Which Brand do you Prefer? </option>
                                            {brands}

                                        </select>
                                    </div>
                                    <div className=''>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carModel' value={model} onChange={handleStateChange} required>
                                            <option disabled selected>Which Model do you Prefer? </option>
                                            {models}
                                        </select>
                                    </div>
                                    <div className='py-4'>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carBrand' value={allCategoryData} onChange={handleCategoryChange} required>
                                            <option disabled selected>Categories </option>
                                            {Categories}
                                        </select>
                                    </div>
                                    <div className=''>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carModel' value={type} onChange={handleTypeChange} required>
                                            <option disabled selected>Types </option>
                                            {types}
                                        </select>
                                    </div>
                                    {/* <div className='py-4'>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carModel' value={partsName} onChange={handlePartsNameChange} required>
                                            <option disabled selected>Parts Name </option>
                                            {partsNames}
                                        </select>
                                    </div> */}
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