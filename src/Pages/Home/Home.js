import React from 'react';
import ComingSoon from '../ComingSoon/ComingSoon';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const Home = () => {
    const hoursMinSecs = { days: 29, hours: 24, minutes: 60, seconds: 60 }
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Blogs></Blogs>
            <ContactUs></ContactUs>
            <ComingSoon hoursMinSecs={hoursMinSecs}></ComingSoon>
            <Footer></Footer>
            {/* <Services></Services> */}
        </div>
    );
};

export default Home;