import React from "react";
import spinner from './Preloader by DA VINCI (7).gif'
const Loading = () => {
    return (
        <div className=" avatar flex justify-center items-center h-screen">
            <div className=" w-72 rounded-full ">
                <img src={spinner} alt="" srcset="" />
            </div>
        </div>

    );
};

export default Loading;