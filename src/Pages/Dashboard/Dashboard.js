import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const Dashboard = () => {
    return (

        <>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-slidder" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-5xl font-bold text-center py-4 text-[#006a4e]'>Dashboard</h2>
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-slidder" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]'><Link to='/dashboard'>Detailing Order</Link></li>
                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]'><Link to='/dashboard/sparePartsOrderList'>SpareParts Order</Link></li>
                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]'><Link to='/dashboard/mechanicsOrderList'>Mechanics Order</Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;