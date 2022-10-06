import React from 'react';
import Banner from './Banner/Banner';
import Blog from './BuyBlog/Blog';
import SearchAccessories from './SearchAccessories/SearchAccessories';
import Footer from '../../Pages/Home/Footer/Footer';
const BuyCar = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchAccessories></SearchAccessories>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default BuyCar;