import React from 'react';
import auth from '../../firebase.init';
import ComingSoon from '../ComingSoon/ComingSoon';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Subscription from './Subscription/Subscription';
import { useAuthState } from "react-firebase-hooks/auth";
import Testimonials from './Testimonials/Testimonials';
import OurCustomers from './OurCustomers/OurCustomers';
import FAQ from './Awards/FAQ/FAQ';
import Counter from './Counter/Counter';
import OurServices from './OurServices/OurServices';
import OurGuarantee from './OurGuarantee/OurGuarantee';
const Home = () => {
    const hoursMinSecs = { days: 29, hours: 24, minutes: 60, seconds: 60 }
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurGuarantee></OurGuarantee>
            <OurServices></OurServices>
            <OurCustomers></OurCustomers>
            <Counter></Counter>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            {/* <HomeBanner></HomeBanner> */}
            {/* <AboutUs></AboutUs> */}
            {
                user && <ContactUs></ContactUs>
            }
            {
                user && <Subscription></Subscription>
            }
            {/* <Awards></Awards> */}
            {/* <ComingSoon hoursMinSecs={hoursMinSecs}></ComingSoon> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;