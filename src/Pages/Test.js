import React, { useEffect, useState } from 'react';


const Test = () => {
    const [data, setData] = useState([]);

    const searchButton = () => {
        const input = document.getElementById("input-value");
        const error = document.getElementById("error");
        const inputText = input.value;
        input.value = '';

        if (inputText <= 0 || inputText >= 0) { //isNaN check number or string /others-true
            // alert("Please enter a number");
            error.innerText = "Please Give a City name";
            input.value = "";
        }
        // else if (inputText <= 0) {
        //     error.innerText = "Please Give a Positive Number";
        //     inputText.value = "";
        // }
        else {
            const url = `https://restcountries.com/v3.1/capital/${inputText}`
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data));
        }
        // const searchButton = (e) => {
        //     const input = document.getElementById("input-value")
        //     const inputValue = input.value
        //     console.log(inputValue)
        // }

    }

    return (
        <div>
            <h2 class="text-center">Play with Cards API</h2>

            <div class=" grid justify-center ">
                <div class="flex w-5/6 ">
                    <input id="input-value" class="form-control rounded-lg p-2" type="search" placeholder="Search Your City" aria-label="Search" />
                    <button onClick={(e) => searchButton(e)} class="btn btn-success mx-2 " type="submit">Search</button>
                </div>

                <h2 id="error" class="text-red-500 text-center my-4 font-bold"></h2>

                <div id="main" class="row">

                </div>
            </div>
            <div className='container mx-auto grid grid-cols-3 gap-4 justify-items-center '>
                {
                    data.map(item => {
                        return (
                            <div >
                                <div >
                                    <h2>{item.capital}</h2>
                                    <img src={item.flags.png} alt="" srcset="" />
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