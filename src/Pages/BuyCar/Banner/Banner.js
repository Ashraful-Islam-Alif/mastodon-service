import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Navbar from '../../Home/Navbar/Navbar';
// import SearchBox from '../../SpareParts/Searchbox/SearchBox';

const PackagesInfo = [
    {
        packages: "Premium Car Wash",
        prices: ["1000"]
    },
    {
        packages: "Interior Deep Clean",
        prices: ["2500"]
    },
    {
        packages: "Car Polish",
        prices: ["5000"]
    }
]

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

        emailjs.sendForm('gmail', 'template_zwg62jc', form.current, 'eTaI0igbbK46QsEv7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toast('Order Place Successfully')
    };

    //Package
    const [{ buyCarPackages, price }, setBuyCarPackages] = useState({})

    const CarPackages = PackagesInfo.map((buyCarPackages) => (
        <option key={buyCarPackages.packages} value={buyCarPackages.packages}>
            {buyCarPackages.packages}
        </option>
    ))

    const Carprices = PackagesInfo.find(item => item.packages === buyCarPackages)?.prices.map((price) => (
        <option key={price} value={price}>
            {price}
        </option>
    ))
    function handlecarPackages(event) {
        setBuyCarPackages(data => ({ price: '', buyCarPackages: event.target.value }));
    }

    function handlePrice(event) {
        setBuyCarPackages(data => ({ ...data, price: event.target.value }));
    }

    // Dynamic selection start
    const [carModelData, setCarModelData] = useState([])


    useEffect(() => {
        fetch('CarDatabase.json')
            .then(res => res.json())
            .then(data => setCarModelData(data))
    }, [])

    const [{ carModel, model }, setData] = useState({

    });

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
    }

    function handleStateChange(event) {
        setData(data => ({ ...data, model: event.target.value }));
    }

    // Dynamic selection End
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
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carBrand' value={buyCarPackages} onChange={handlecarPackages} required>
                                            <option disabled selected>Packages </option>
                                            {CarPackages}

                                        </select>
                                    </div>
                                    <div className=''>
                                        <select className='select select-bordered w-full max-w-xs font-normal' name='carModel' value={price} onChange={handlePrice} required>
                                            <option disabled selected>Prices </option>
                                            {Carprices}
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