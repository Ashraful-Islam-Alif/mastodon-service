import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="navbar sticky z-50 top-0  bg-[#f8f398] bg-opacity-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#home'>Home</a></li>
                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#aboutus'>About Us</a></li>
                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#testimonials'>Testimonials</a></li>
                        {
                            user && <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#contactus'>Contact Us</a></li>
                        }
                        {
                            user && <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#subscription'>Subscription</a></li>
                        }

                        <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#offer'>Offers</a></li>
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl' to='/blog'>Blogs</Link>
                        <li>
                            {user ?
                                <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl text-md px-5 py-2.5 text-center mr-2 mb-2 ml-2" onClick={handleSignOut}>SignOut</button>
                                :
                                <a href="/login" className='text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl mr-2 mb-2 ml-2'><button className=" text-md text-center">Login</button></a>
                            }
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-start">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/8KPBBhf/picture.png" />
                        </div>
                    </label>
                </div>
                <a href='/#home' className=" hover:text-lime-300 hover:bg-none normal-case text-xl md:text-2xl ml-3 font-bold">Mastodon</a>
            </div>


            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 " >
                    <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#home'>Home</a></li>
                    <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#aboutus'>AboutUs</a></li>
                    <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#testimonials'>Testimonials</a></li>
                    {
                        user && <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#contactus'>ContactUs</a></li>
                    }
                    {
                        user && <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#subscription'>Subscription</a></li>
                    }
                    <li className='hover:text-white hover:bg-[#94ca21cf] rounded-xl'><a href='/#offer'>Offers</a></li>
                    <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl' to='/blog'>Blogs</Link>
                </ul>
                {user ?
                    <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl font-medium  text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2" onClick={handleSignOut}>SignOut</button>
                    :
                    <a href="/login"><button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl font-medium  text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2">Login</button></a>
                }
            </div>
        </div>
    );
};

export default Navbar;