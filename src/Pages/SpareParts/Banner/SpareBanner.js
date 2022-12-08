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
    },
    {
        name: "Hyundai",
        models: ["Accent", "Creta", "Elantra", "H1", "Santa FE", "Sonata", "Tucson"]
    },
    {
        name: "KIA",
        models: ["Optima", "Seltos", "Sonet", "Sportage"]
    },
    {
        name: "LEXUS",
        models: ["ES 300H", "LC500H", "NX", "RX350"]
    },
    {
        name: "MAHINDRA",
        models: ["TUV300", "XUV300", "Bolero", "SCORPIO"]
    },
    {
        name: "MAZDA",
        models: ["6 GRAND TOURING", "AXELA", "CX-3", "MX-5"]
    },
    {
        name: "MERCEDES-BENZ",
        models: ["B-CLASS B200 CDI SPORT", "B-CLASS 160", "B-CLASS 180", "B-CLASS 200", "B-CLASS 200 4MATIC D", "B-CLASS 200 D", "CLA", "E-CLASS", "E-CLASS AMG E43 4MATIC", "E-CLASS AMG E63 S", "E-CLASS AMG E63 S WAGON", "GLC 43 AMG COUPE", "GLC 220D 4MATIC", "GLC 250 4MATIC ", "GLC 250D 4MATIC", "GLC 300D 4MATIC", "GLC 350D 4MATIC"]
    },
    {
        name: "MORRIS GARAGE",
        models: ["GLOSTER", "H3", "MG3", "ZS"]
    },
    {
        name: "MITSUBISHI",
        models: ["ASX", "ATTRAGE", "L200", "LANCER EX", "OUTLANDER", "OUTLANDER PHEV", "PAJERO", "PAJERO SPORTS", "ROSA", "XPANDER"]
    },
    {
        name: "NISSAN",
        models: ["NAVARA", "PATROL", "SYLPHY", "URVAN", "GTR", "X-TRAIL"]
    },
    {
        name: "PEUGEOT",
        models: ["2008 SUV", "3008", "508"]
    },
    {
        name: "PROTON",
        models: ["PERSONA", "SEGA", "X70 EXECUTIVE", "X7 PREMIUM"]
    },
    {
        name: "LAND ROVER",
        models: ["DEFENDER", "DISCOVERY", "LAND ROVER RANGE ROVER", "RANGE ROVER EVOQUE", "RANGE ROVER SPORT", "RANGE ROVER VELAR"]
    },
    {
        name: "RENAULT",
        models: ["DUSTER", "KWID", "TRIBER"]
    },
    {
        name: "SUZUKI",
        models: ["ALTO 800", "APV MICROBUS", "CIAZ", "DZIRE", "ERTIGA", "GRAND VITARA", "SWIFT", "WAGON R"]
    },
    {
        name: "TATA",
        models: ["ALTROZ", "HARRIER", "INDIGO ECS", "MAGIC IRIS", "NANO", "NEXON", "TIAGO", "XENON"]
    },
    {
        name: "TOYOTA",
        models: ["ALLION", "ALPHARD HYBRID", "AQUA", "AVANZA", "AXIO", "AXIO FIELDER", "C-HR HYBRID", "CAMRY", "COROLLA ALTIS", "COROLLA CROSS", "CROWN ROYAL", "CROWN MAJESTA", "FORTUNER LEGENDER", "FORTUNER", "HARRIER", "HIACE 12 -15", "HILANDER", "HIACE 16", "HILUX DOUBLE CABIN", "HILUX SINGLE CABIN (4WD)", "LC200", "Mark 2 Tourer", "Mark 2 Grande", "NOAH HYBRID", "LAND CRUISER PRADO", "PREMIO", "PRIUS", "PRIUS", "PROBOX OLD", "RAV4", " RUSH", "SUPRA MK4", "SUPRA MK5", "VITZ", "YARIS 1.3L", "YARIS 1.5L", "GR YARIS 1.5L SPORT"]
    },
    {
        name: "VOLVO",
        models: [" S90 Hybrid T8 R-Design 2021", "V60 T5 AWD"]
    },
    {
        name: "Lamborghini",
        models: ["Huracan evo "]
    },
    {
        name: "Volkswagen",
        models: ["Touareg V8 R Line"]
    },
    {
        name: "Jaguar",
        models: ["XJL AWD", "XJ XJL AWD", "F pace", "XF"]
    },
    {
        name: "Porsche",
        models: [" 718 Boxster GTS 4.0 2020", "Panamera 4s", "Macan", "718 cayman gt4", "taycan turbo", "Cayenne turbo"]
    },
    {
        name: "Ford",
        models: ["Mustang", "RAPTOR", "Eco sport", "RANGER"]
    },
    {
        name: "TESLA",
        models: ["MODEL 3", "MODEL S P100D", "MODEL Y"]
    },
    {
        name: "BENTLEY",
        models: ["Genesis", "Continental GT", "Bentayga", "Flying Spur"]
    },
    {
        name: "SUBARU",
        models: ["BRZ", "WRX STI", "XV", "Legacy B4", "Impreza"]
    },
    {
        name: "FERRARI",
        models: ["458 Italia", "328 GTS", "F430"]
    },
    {
        name: "HUMMER",
        models: ["H2"]
    },
    {
        name: "CADILLAC",
        models: ["Escalade Esv", "Escalade 2015", "CTS", "Escalade 2010"]
    },
    {
        name: "Rolls- Royce",
        models: ["Wraith", "Ghost(stock)", "Phantom Vlll", "Ghost Mansory", "Ghost 2014 Series 2"]
    },
    {
        name: "MASERATI",
        models: ["Maserati Levante", "Quattroporte S"]
    },
    {
        name: "Chevrolet",
        models: ["Camaro Zl1", "Camaro SS", "Sonic", "Spark IS", "Trailblazer It", "Trailblazer", "Hennesy Camaro hpe650"]
    },
    {
        name: "OTHER",
        models: ["OTHER"]
    },
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