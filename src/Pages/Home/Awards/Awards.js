// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Awards.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Awards = () => {
    return (
        <div className="py-32 ">
            <h2 className='text-[#e46161] text-2xl md:text-3xl lg:text-6xl font-semibold text-center'>Awards</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="p-6 mb-20">
                    <img src="https://i.ibb.co/GPSXjvV/awards1.jpg" />
                    <h2 className="text-center text-2xs md:text-2xl font-bold pt-4">Bangabandhu Innovation Grant Award 2020</h2>
                </SwiperSlide>
                <SwiperSlide className="p-6 mb-20">
                    <img src="https://i.ibb.co/tXVmShd/awards2.png" />
                    <h2 className="text-center text-2xs md:text-2xl font-bold pt-4">Entrepreneirs' Organization</h2>
                </SwiperSlide>
                <SwiperSlide className="p-20 mb-20">
                    <img src="https://i.ibb.co/vkQ1px0/awards3.png" />
                    <h2 className="text-center text-2xs md:text-2xl font-bold pt-4">ICT Division</h2>
                </SwiperSlide>
                <SwiperSlide className="p-24 mb-20">
                    <img src="https://i.ibb.co/TgSKG6P/awards4.png" />
                    <h2 className="text-center text-2xs md:text-2xl font-bold pt-4">Innovation Design and Entreprenuurship Academy</h2>
                </SwiperSlide>
                <SwiperSlide className="p-6 mb-24">
                    <img src="https://i.ibb.co/z2GR8ZV/awards5.jpg" />
                    <h2 className="text-center text-2xs md:text-2xl font-bold pt-4">Top 10, National Finalist, Microsoft Young Bangla Summit 2018</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Awards;