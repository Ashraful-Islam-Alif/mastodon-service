import React, { useState } from 'react';

const Test = () => {
    const [data, setData] = useState([]);

    const searchButton = () => {
        const input = document.getElementById("input-value");
        const error = document.getElementById("error");
        const inputText = input.value;
        input.value = '';
        if (inputText <= 0 || inputText >= 0) { //isNaN check number or string /others-true
            // alert("Please enter a number");
            error.innerText = "Please search with car brand, model and parts name";
            input.value = "";
        }
        else {
            const url = `https://mastodon-service-server.vercel.app/product/${inputText}`
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data));
        }
    }

    return (
        <div>
            <div class=" grid grid-col-2 gap-2  ">
                <div class=" grid grid-col-2 gap-2  ">
                    <div class="flex ">
                        <input id="input-value" class="form-control input input-bordered w-5/6" type="search" placeholder="Search car brand, model and parts name" aria-label="Search" />
                        <button onClick={(e) => searchButton(e)} class="w-1/6 border cursor-pointer bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center text-white" type="submit">Search</button>
                    </div>
                    <h2 id="error" class="text-red-500 text-center my-4 font-bold"></h2>
                    <div id="main" class="row">
                    </div>
                </div>
                <h2 id="error" class="text-red-500 text-center my-4 font-bold"></h2>

                <div id="main" class="row">

                </div>
            </div>
            <div className='container mx-auto grid grid-cols-3 gap-4 justify-items-center '>
                {
                    data.map(item => {
                        return (
                            <div key={item._id}>
                                <div >
                                    <h2>{item.name}</h2>
                                    <img src={item.image} alt="" srcset="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Test;