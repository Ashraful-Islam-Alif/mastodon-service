import React from 'react';
import ComingSoon from '../ComingSoon/ComingSoon';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const Home = () => {
    const hoursMinSecs = { days: 30, hours: 24, minutes: 60, seconds: 60 }
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ComingSoon hoursMinSecs={hoursMinSecs}></ComingSoon>
            <AboutUs></AboutUs>
            <Blogs></Blogs>
            <ContactUs></ContactUs>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;