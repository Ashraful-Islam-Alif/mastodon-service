import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
    const [yearlyBooking, setTodayBooking] = useState(2019);
    const [partnerBooking, setMonthBooking] = useState(160);
    const [orderBooking, setAllTimeBooking] = useState(5200);

    return (
        // <div className='bg-gray-200 grid grid-cols-1 md:grid-cols-3 justify-items-center'>
        //     <div>hello</div>
        //     <div>counter </div>
        //     <div>I am here</div>
        // </div>
        <div className="bg-gray-200 py-32 px-8">
            <div className="container mx-auto  ">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                    <div>
                        <div className="text-xl md:text-2xl lg:text-5xl text-[#006a4e] font-bold  mt-3">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 30 }}>
                                        {isVisible ? <CountUp end={yearlyBooking} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div>
                            <p className=" font-medium lg:text-xl mt-1 md:mt-2">
                                <span>
                                    Our Journey Started
                                </span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="text-xl md:text-2xl lg:text-5xl text-[#006a4e] font-bold  mt-3">
                            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 30 }}>
                                        {isVisible ? <CountUp end={partnerBooking} /> : null}
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                        <div>
                            <p className=" font-medium lg:text-xl mt-1 md:mt-2">
                                <span>
                                    Partner Workshop
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5 className="text-xl md:text-2xl lg:text-5xl  text-[#006a4e] font-bold  mt-3 ">
                                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                    {({ isVisible }) => (
                                        <div style={{ height: 30 }}>
                                            {isVisible ? <CountUp end={orderBooking} /> : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </h5>
                        </div>
                        <div>
                            <p className=" font-medium lg:text-xl mt-1 md:mt-2">
                                <span>
                                    Order Attended
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Counter;