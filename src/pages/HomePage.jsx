import React from 'react'
import HomePageNavbar from '../components/HomePageNavbar'
import HomePageHeroSection from '../components/HomePageHeroSection'
import DecorativeElements from '../components/DecorativeElements'
import HomePageFeatures from '../components/HomePageFeatures'
import HomePageFooter from '../components/HomePageFooter'

function HomePage() {
  return (
    <div>
      <DecorativeElements />
      <HomePageNavbar />
      <HomePageHeroSection />
      <HomePageFeatures />
      <HomePageFooter/>
    </div>
  )
}

export default HomePage