import React from 'react'
import HomePageNavbar from '../components/HomePageNavbar'
import HomePageHeroSection from '../components/HomePageHeroSection'
import DecorativeElements from '../components/DecorativeElements'
import HomePageFeatures from '../components/HomePageFeatures'

function HomePage() {
  return (
    <div>
      <DecorativeElements />
      <HomePageNavbar />
      <HomePageHeroSection />
      <HomePageFeatures />
    </div>
  )
}

export default HomePage