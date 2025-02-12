import React, { useState } from 'react'
import HomePageNavbar from '../components/HomePageNavbar'
import DecorativeElements from '../components/DecorativeElements'
import Welcome from '../components/FuturePlanning/Welcome'
import UserSelection from '../components/FuturePlanning/userSelection'

function FuturePlanning() {

    const [step, setStep] = useState(0);
    const [userType, setUserType] = useState(0); // 1 for investment and 2 for active income

    return (
        <div className='h-screen'>
            <HomePageNavbar />
            <DecorativeElements />
            {step == 0 && <Welcome setStep={setStep} />}
            {step == 1 && <UserSelection setStep={setStep} setUserType={setUserType} />}
        </div>
    )
}

export default FuturePlanning