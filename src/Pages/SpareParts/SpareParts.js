import React from 'react';
import SpareBanner from './Banner/SpareBanner';
import Banner from './Banner/SpareBanner';
import ProductCategory from './ProductCategory/ProductCategory';
import Blogs from './SparePartsBlog/Blog';
import Footer from '../Home/Footer/Footer'
import DownloadPdf from './Banner/DownloadPdf';
const SpareParts = () => {
    return (
        <div>
            <SpareBanner></SpareBanner>
            <ProductCategory></ProductCategory>
            <DownloadPdf></DownloadPdf>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default SpareParts;