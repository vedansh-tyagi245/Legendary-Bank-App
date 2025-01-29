import React, { useState } from 'react';
import Logo from "../assets/logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function HomePageNavbar() {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <>
            <nav className='flex items-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                <div className={`flex items-center w-[250px]`}>
                    <img src={Logo} alt="Bank Logo" className='' style={{ margin: '10px', height:"60px" }} />
                    <div className='text-white font-mono' style={{ fontFamily: "Sofia", fontSize: '30px', textShadow: "3px 3px 3px #ababab" }}>Unity Bank</div>
                </div>

                <ul className='lg:flex text-white font-mono xl:w-[80vw] xl:gap-15 lg:gap-6 lg:w-[75vw] hidden justify-end'>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/'}>Home</Link></li>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/about'}>About Us</Link></li>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/products'}>Products</Link></li>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/Eservices'}>Payment-Gateway</Link></li>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/Investor'}>Investing</Link></li>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/customercare'}>Customer Care</Link></li>
                    <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center'><Link to={'/login'}>Login</Link></li>
                </ul>

                {/* Hamburger icon for phone view */}
                <div className="text-white text-3xl flex justify-end flex-grow lg:hidden" style={{ paddingRight: '15px' }} onClick={() => { setIsNavbarOpen(!isNavbarOpen) }}>☰</div>
            </nav>

            {/* Animated Navbar */}
            <ul className={`lg:hidden text-white font-mono transition-all duration-500 ease-in-out overflow-hidden ${isNavbarOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/'}>Home</Link></li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/about'}>About Us</Link></li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/products'}>Products</Link></li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/Eservices'}>E-services</Link></li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/Investor'}>Investor Info</Link></li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/customercare'}>Customer Care</Link></li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400 text-center border-b-2' style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}><Link to={'/login'}>Login</Link></li>
            </ul>
        </>
    );
}

export default HomePageNavbar;
