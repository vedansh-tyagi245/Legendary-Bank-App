import React from 'react'
import Logo from "../assets/logo.svg"

function HomePageNavbar() {
    return (
        <div className='flex items-center border-b-2 gap-3' style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>

            <img src={Logo} alt="" srcset="" className='h-15' style={{ margin: '10px' }} />
            <div className='text-white  font-mono' style={{ fontFamily: "Sofia", fontSize: '30px', textShadow: "3px 3px 3px #ababab" }}>Unity Bank</div>

            <li className='flex text-white font-mono gap-20 justify-end w-[80vw]'>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>Home</ul>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>About Us</ul>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>Products</ul>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>E-services</ul>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>Investor Info</ul>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>Customer Care</ul>
                <ul className='hover:font-bold cursor-pointer hover:text-gray-400'>Open Account</ul>
            </li>
        </div>
    )
}

export default HomePageNavbar