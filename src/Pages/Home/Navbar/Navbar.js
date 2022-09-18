import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Service</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Offers</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-start">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/8KPBBhf/picture.png" />
                        </div>
                    </label>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Mastodon</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Service</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Offers</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-success btn-xs lg:btn-md text-white">Login</button>
            </div>
        </div>
    );
};

export default Navbar;