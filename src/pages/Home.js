import React from 'react'
import About from '../components/About/About'
import Achievement from '../components/Achievement/Achievement'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Team from '../components/Team/Team'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Achievement />
        <Team />
        <Footer />
    </div>
  )
}

export default Home