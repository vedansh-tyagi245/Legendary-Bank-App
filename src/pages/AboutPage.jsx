import React from 'react'
import HomePageNavbar from "../components/HomePageNavbar"
import About from '../components/About'
import DecorativeElements from '../components/DecorativeElements'
import HomePageFooter from '../components/HomePageFooter'

function AboutPage() {
  return (
    <>
    <DecorativeElements/>
    <HomePageNavbar/>
    <About/>
    <HomePageFooter/>
    </>
  )
}

export default AboutPage