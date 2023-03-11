import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    return (
        <div className="navbar sticky z-50 top-0  bg-gray-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <li className='p-3 mr-2 rounded-xl text-[#006a4e] text-lg font-bold underline '>{user?.displayName}</li>}
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/home'>Home</Link>
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/aboutus'>AboutUs</Link>
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/buyCar'>Detailing</Link>
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/spareParts'>Spare Parts</Link>
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/service'>Mechanics</Link>
                        <Link className='p-2 ml-2 mb-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/blog'>Blogs</Link>
                        <li>
                            {
                                user && <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/dashboard'>Dashboard</Link>
                            }
                            {user ?
                                <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl font-medium  text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2" onClick={handleSignOut}>SignOut</button>
                                :
                                <a href="/login"><button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl font-medium  text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2">Login</button></a>
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
                <div className='flex flex-col'>
                    <a href='/#home' className="hover:bg-none normal-case text-xl md:text-2xl ml-3 font-bold text-[#006a4e]">mastodon</a>
                    <a href='/#home' className="hover:bg-none normal-case text-xs md:text-sm ml-3 font-sans text-[#006a4e]">Automobile Marketplace</a>
                </div>
            </div>


            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 " >
                    <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/home'>Home</Link>
                    <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/aboutus'>About</Link>
                    <button className=' dropdown dropdown-hover dropdown-center'>
                        <label tabIndex={0} className="p-3 mr-2  hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]">Services</label>
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52 text-start p-2 my-2">
                            <Link to='/buyCar' className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e] mt-4 py-2 px-2 '>Detailing</Link>
                            <Link to='/spareParts' className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e] mt-4 py-2 px-2'>SpareParts </Link>
                            {/* Upper case code <span className="indicator-item badge w-28 text-xs bg-[#006a4e] border-0 ">Coming Soon</span> */}
                            <Link to='/service' className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e] mt-4 py-2 px-2 '> Mechanics</Link>
                            {/* <Link to='/test' className='hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e] mt-4 py-2 px-2 '>  Test search</Link> */}
                        </ul>
                    </button>
                    {/* <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/buyCar'>BuyACar</Link>
                    <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/spareParts'>SpareParts</Link>
                    <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/service'>Services</Link> */}
                    <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/blog'>Blogs</Link>
                </ul>
                {
                    user && <Link className='p-3 mr-2 hover:text-white hover:bg-[#94ca21cf] rounded-xl text-[#006a4e]' to='/dashboard'>Dashboard</Link>
                }
                {user && <li className='p-3 mr-2 rounded-xl text-[#006a4e] font-bold ' style={{ whiteSpace: 'nowrap' }}>{user?.displayName}</li>}
                {user ?
                    <button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl font-medium  text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2" onClick={handleSignOut}>SignOut</button>
                    :
                    <a href="/login"><button className="text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-xl font-medium  text-md px-5 py-2.5 text-center mr-2 mb-2 mt-2">Login</button></a>
                }
            </div>
            <div className="navbar-end">
                <label tabIndex={1} htmlFor="dashboard-slidder" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;