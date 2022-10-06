import React from 'react';
import Footer from '../../Pages/Home/Footer/Footer';
import Banner from './Banner/Banner';
import ServiceBlog from './ServiceBlog/ServiceBlog';
import ServiceCategory from './ServiceCategory/ServiceCategory';

const Services = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCategory></ServiceCategory>
            <ServiceBlog></ServiceBlog>
            <Footer></Footer>
        </div>
    );
};

export default Services;