import React, { useState } from 'react';

const SearchBox = () => {
    const [data, setData] = useState([]);
    const [detect, setDetect] = useState('')
    const searchButton = (e) => {
        const input = document.getElementById("input-value");
        const error = document.getElementById("error");
        const inputText = input.value;
        error.innerText = ""
        setData([])
        let items = []
        if (e.key === "Enter") {
            const boxvalue = e.target.value;
            items.push(boxvalue);

            if (items <= 0 || items >= 0 || items === '') { //isNaN check number or string /others-true
                // alert("Please enter a number");
                error.innerText = "Please search with car brand, model and parts name";
                input.value = "";
            }
            else {
                const url = `https://mastodon-service-server.vercel.app/product/${inputText}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => setData(data));
                input.value = '';
            }
        }

    }

    return (
        <div>
            <div class="grid grid-col-2 gap-2">
                <div class="flex ">
                    <input onKeyDown={searchButton} onClick={(e) => setDetect(e.target.value)} id="input-value" class="form-control input input-bordered w-5/6" type="search" placeholder="Search car brand, model and parts name" aria-label="Search" />
                    <button onClick={(e) => searchButton(e)} class="w-1/6 border cursor-pointer bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center text-white" type="submit">Search</button>
                </div>
                <h2 id="error" class="text-red-500 text-center my-4 font-bold"></h2>
                <div id="main" class="row">
                </div>
            </div>
            <h2 id="error" class="text-red-500 text-center my-4 font-bold"></h2>

            <div id="main" class="row">

            </div>

            <div className='container mx-auto grid grid-cols-3 gap-4 justify-items-center '>
                {
                    data.map(item => {
                        return (
                            <div className='shadow-lg bg-gray-100 p-2 rounded-2xl' key={item._id}>
                                <div className='container mx-auto grid-cols-1  md:grid-cols-3 gap-4 '>
                                    <div className='grid justify-items-center'>
                                        <img className='p-4' src={item.image} alt="" srcset="" />
                                        <h2 className='uppercase font-bold'>{item.name}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SearchBox;