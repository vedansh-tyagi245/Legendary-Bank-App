import React from 'react'
import HomePageNavbar from '../components/HomePageNavbar'
import HomePageHeroSection from '../components/HomePageHeroSection'
import DecorativeElements from '../components/DecorativeElements'

function HomePage() {
  return (
    <div>
      <DecorativeElements />
      <HomePageNavbar />
      <HomePageHeroSection />
    </div>
  )
}

export default HomePage