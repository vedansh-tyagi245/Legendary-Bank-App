import React from 'react'
import Logo from "../assets/logo.svg"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function HomePageNavbar() {
    return (
        <div className='flex items-center border-b-2 gap-3' style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>

            <img src={Logo} alt="" srcset="" className='h-15' style={{ margin: '10px' }} />
            <div className='text-white  font-mono' style={{ fontFamily: "Sofia", fontSize: '30px', textShadow: "3px 3px 3px #ababab" }}>Unity Bank</div>

            <ul className='flex text-white font-mono gap-20 justify-end w-[80vw]'>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/'}>Home</Link>
                    </li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/about'}>About Us</Link>
                    </li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/products'}>Products</Link>
                    </li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/Eservices'}>E-services</Link>
                    </li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/Investor'}>Investor Info</Link>
                    </li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/customercare'}>Customer Care</Link>
                    </li>
                <li className='hover:font-bold cursor-pointer hover:text-gray-400'>
                    <Link to={'/register'}>Open Account</Link>
                    </li>
            </ul>
        </div>
    )
}

export default HomePageNavbar