import React from 'react'
import About from '../components/About/About'
import Achievement from '../components/Achievement/Achievement'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Team from '../components/Team/Team'

function Home() {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Achievement />
        <Team />
        <Footer />
    </>
  )
}

export default Home