import React from 'react'
import DecorativeElements from '../components/DecorativeElements'
import HomePageNavbar from '../components/HomePageNavbar'
import RegistrationLogo from "../assets/RegistrationLogo.png"
import DancingSticker from "../assets/DancingSticker.gif"

function Registration() {
  return (
    <div>
      <DecorativeElements/>
      <HomePageNavbar/>
      <div className="container h-[613px] flex justify-center items-center">
        <div className="inner-container border border-white h-[500px] w-[1000px] flex justify-center items-center">
          <div className="container h-[490px] w-[990px] border border-white flex items-center justify-center">
            <div className="left border border-white w-[400px] h-[480px] flex justify-center items-center"><img src={DancingSticker} alt="" srcset="" className='h-96 w-96'/></div>
            <div className="right border border-white w-[580px] h-[480px] flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration