import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const UpperBanner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-screen">
                <SwiperSlide><img src="https://i.ibb.co/vZHjhC0/auto-mechanic-working-garage-repair-service.jpg" alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/bKPznqT/car-parts-repair-garage.jpg" alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/wQWTwKB/man-reading-address-box-deliver.jpg" alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/mGdj3Bq/young-happy-couple-signing-documents-while-being-with-car-mechanic-repair-shop.jpg" alt="" srcset="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default UpperBanner;