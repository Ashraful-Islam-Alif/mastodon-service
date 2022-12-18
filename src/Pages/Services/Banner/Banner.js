import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../Pages/Home/Navbar/Navbar';
// import SearchBox from '../../../Pages/SpareParts/Searchbox/SearchBox';
import { useState } from "react";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const DurationInfo = [
    {
        durations: "Hourly",
        prices: [" ", "400"]
    },
    {
        durations: "Half Day",
        prices: [" ", "1000"]
    },
    {
        durations: "Full Day",
        prices: [" ", "1600"]
    }
]

const Banner = () => {
    const { control } = useForm({
        defaultValues: {
            firstName: '',
            select: {}
        }
    });
    //Duration
    const [{ mechanicsDuration, price }, setBuyCarPackages] = useState({})
    const [Cbrands, setbrands] = useState();
    const [Cmodel, setmodel] = useState();
    const [CPackage, setPackage] = useState();
    const [CPrice, setPrice] = useState();

    const CarDuration = DurationInfo.map((mechanicsDuration) => (
        <option key={mechanicsDuration.durations} value={mechanicsDuration.durations}>
            {mechanicsDuration.durations}
        </option>
    ))

    const CarDurationPrices = DurationInfo.find(item => item.durations === mechanicsDuration)?.prices.map((price) => (
        <option key={price} value={price}>
            {price}
        </option>
    ))

    function handlecarDuration(event) {
        setBuyCarPackages(data => ({ price: '', mechanicsDuration: event.target.value }));
        const carPackage = event?.target?.value;
        setPackage(carPackage);
    }

    function handlePrice(event) {
        setBuyCarPackages(data => ({ ...data, price: event.target.value }));
        const carPrice = event?.target?.value;
        setPrice(carPrice);
    }

    // Dynamic selection start
    const [carModelData, setCarModelData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cardata')
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
    // Dynamic selection End

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_zwg62jc', form.current, 'eTaI0igbbK46QsEv7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        const serviceBooking = {
            CustomerName: e?.target?.name?.value,
            CustomerEmail: e?.target?.email?.value,
            CustomerNumber: e?.target?.number?.value,
            CustomerAddress: e?.target?.address?.value,
            Cbrands,
            Cmodel,
            CPackage,
            CPrice,
        }
        fetch('http://localhost:5000/mechanicsOrderbooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceBooking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                e.target.reset();
                toast('Order Place Successfully')
            })
    };
    const [user] = useAuthState(auth);
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
                        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                            <div className="card-body">
                                <form className='grid grid-rows-4 gap-2' ref={form} onSubmit={sendEmail}>
                                    {/* <label className='my-2'>Name</label> */}
                                    <input className='form-control input input-bordered' type="text" name="name" defaultValue={user.displayName} disabled required />
                                    {/* <label className='my-2'>Email</label> */}
                                    <input className='form-control input input-bordered' type="email" name="email" defaultValue={user.email} disabled required />
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
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carBrand' value={mechanicsDuration} onChange={handlecarDuration} required>
                                            <option disabled selected>Packages </option>
                                            {CarDuration}
                                        </select>
                                    </div>
                                    <div className=''>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carModel' value={price} onChange={handlePrice} required>
                                            <option disabled selected>Prices </option>
                                            {CarDurationPrices}
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
        </div>
    );
};
export default Banner;