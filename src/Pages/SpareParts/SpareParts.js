import React from 'react';
import SpareBanner from './Banner/SpareBanner';
import Banner from './Banner/SpareBanner';
import ProductCategory from './ProductCategory/ProductCategory';
import Blogs from './SparePartsBlog/Blog';
import Footer from '../Home/Footer/Footer'
const SpareParts = () => {
    return (
        <div>
            <SpareBanner></SpareBanner>
            <ProductCategory></ProductCategory>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default SpareParts;